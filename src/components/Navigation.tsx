import { useNavigate } from "react-router-dom"

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate(-1)}>back</button>
            <button onClick={() => navigate('/')}>page 1</button>
            <button onClick={() => navigate('/page2')}>page 2</button>
            <button onClick={() => navigate('/page3')}>page 3</button>
        </>
    )
}