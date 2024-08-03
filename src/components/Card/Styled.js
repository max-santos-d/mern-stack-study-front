import styled from 'styled-components';

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;

    box-shadow: rgba(58, 50, 105, 0.15) 8px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 0.3rem;
    background-color: #fff;
    padding: 2rem;
`;

export const CardContent = styled.article`
    display: flex;
    max-width: 100%;
    align-items: center;
    gap: 1rem;

    div {
        height: 100%;
        width: 100%;
    }

    h2{
        margin-bottom: 1rem;
    }

    img {
        width:100%;
        height: 15rem;
        object-fit: cover;
        object-position: center;
        margin-bottom: 1rem;
    }
`;

export const CardInteractions = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

    div{
        display: flex;
        align-items: center;
        gap: .2rem;
    }
`;