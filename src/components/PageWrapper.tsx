import { ComponentProps, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AnimatedRouteWrapper } from './AnimatedRoutes';

const Wrapper = styled.div<{$backgroundColor?: string}>`
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
`

export const PageWrapper = ({ children, props }: PropsWithChildren<{props?: ComponentProps<typeof Wrapper>}> ) => {
    return <AnimatedRouteWrapper><Wrapper {...props}>{children}</Wrapper></AnimatedRouteWrapper>
}