import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;

    form {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        width: 100%;
    };
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    gap: 1rem;
    margin: 1rem;
    background-color: ${(props) => (props.type === 'signin' ? 'blue' : 'white')};
    box-shadow: rgba(58, 50, 105, 0.15) 8px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    color: ${(props) => (props.type === 'signup' ? 'blue' : 'white')};

    h2{
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`;