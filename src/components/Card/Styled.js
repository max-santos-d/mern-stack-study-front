import styled from 'styled-components';

export const CardContainer = styled.section`
    box-shadow: rgba(58, 50, 105, 0.15) 8px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 0.5rem;
    background-color: ${(props => (props.top ? '#a626a6' : '#fff'))};
    color:  ${(props => (props.top ? 'white' : ''))};
`;

export const CardContent = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    };

    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: .5rem .5rem 0 0;
    };
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    padding: 1rem;

    h2{
        margin-bottom: 1rem;
        font-size: 1rem;
    };
`;

export const CardInteractions = styled.article`
    display: flex;
    align-self: flex-start;
    padding: 1rem;
    gap: 1rem;

    section{
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`;