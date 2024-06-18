import {
    AnimatePresence,
    motion,
    type Variants,
  } from 'framer-motion';
  import {
    ReactElement,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
  } from 'react';
  import { Routes, useLocation, useNavigationType } from 'react-router-dom';
  import styled from 'styled-components';
  
  const AnimationContainer = styled(motion.div)`
    position: relative;
  `;

  type NavigationType = 'PUSH' | 'POP'
  
  const ActionContext = createContext<{
    navigationType: NavigationType | undefined;
  }>({
    navigationType: undefined,
  });
  export const AnimatedRoutes = ({ children }: PropsWithChildren): ReactElement => {
    const location = useLocation();
    const navigationType = useNavigationType();

    const [parsedNavigationType, setParsedNavigationType] = useState<NavigationType | undefined>();

    useEffect(() => {
      if (navigationType !== 'REPLACE') {
        setParsedNavigationType(navigationType);
      }
    }, [navigationType])
  
    const value = useMemo(
      () => ({
        navigationType: parsedNavigationType,
      }),
      [parsedNavigationType],
    );
  
    return (
      <ActionContext.Provider value={value}>
        <AnimatePresence
          mode="sync"
          initial={false}
          custom={{ action: value.navigationType }}>
          <Routes location={location} key={location.pathname}>
            {children}
          </Routes>
        </AnimatePresence>
      </ActionContext.Provider>
    );
  };
  
  const transition = {
    duration: 1,
    ease: 'linear',
    // delay: 0.5,
  };
  
  export const AnimatedRouteWrapper = ({
    children,
    ...rest
  }: PropsWithChildren): ReactElement => {
    const { navigationType } = useContext(ActionContext);
  
    const variants: Variants = {
      enter: () => {
        return {
          x: 0,
          transition,
          transitionEnd: {
            zIndex: 0,
          },
        };
      },
      initial: () => {
        const isPush = navigationType === 'PUSH';
  
        return {
          opacity: 1,
          x: isPush ? '100%' : '0.001px',
          transition,
          repeatCount: 2,
          zIndex: isPush ? 1 : 0,
        };
      },
  
      exit: (args) => {
        const isPop = args?.action === 'POP';
  
        return {
          x: isPop ? '100%' : '0.001px',
          transition,
          zIndex: isPop ? 1 : 0,
          position: 'fixed',
          top: 0,
          left: isPop ? 0 : 0,
          bottom: 0,
          right: 0,
        };
      },
    };
  
    return (
      <AnimationContainer
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        {...rest}>
        {children}
      </AnimationContainer>
    );
  };
  