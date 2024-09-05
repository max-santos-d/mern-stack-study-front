import styled from 'styled-components';

export const CardContainer = styled.section`
    box-shadow: rgba(58, 50, 105, 0.15) 8px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 0.5rem;
    background-color: ${(props => (props.top === 'true' ? '#a626a6' : '#fff'))};
    color:  ${(props) => (props.top === 'true' ? 'white' : '')};
    min-width: 500px;
    max-width: 700px;
`;

export const CardContent = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

    img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: .5rem .5rem 0 0;
    };
`;

export const CardActions = styled.div`
    display: flex;
    min-width: 100%;
    margin-left: 89%;
    margin-top: 1rem;
    gap: 0.5rem;
    
    i {
        cursor: pointer;
        color: #0bade3;
        font-size: 1.1rem;
        text-decoration: none;
        border: none;
    };   
`;

export const CardInfo = styled.div`
    font-size: 1rem;
    padding: 0 1rem 1rem 1rem;

    h2{
        margin-bottom: 1rem;
        font-size: 1.3rem;
    };
`;

export const CardInteractions = styled.article`
    display: flex;
    align-self: flex-start;
    padding: 1rem;
    gap: 1rem;

    section {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    };

    i {
        cursor: pointer;
        transition: 0.3s ease-in-out;
    };
`;