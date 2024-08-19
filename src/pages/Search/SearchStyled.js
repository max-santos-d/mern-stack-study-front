import styled from "styled-components";

export const SectionSearch = styled.section`
    margin: auto;
    max-width: 900px;
`;

export const SearchPosts = styled.section`
    display: grid;
    grid-gap: 1rem;
    margin: 1rem auto;
    width: 50%;
`;

export const TextResults = styled.div`
    margin: auto;
    padding: 2rem;
    background-color: #fff;
    width: 50%;
    border-radius: 0.5rem;
    margin-top: 3rem;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

    span {
        font-size: 1rem;
    }
`;
