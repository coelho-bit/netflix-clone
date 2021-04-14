import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: min(80%, 500px);
`;


export const Image = styled.img`
    width: 100%;
`

export const Title = styled.h1`
    color: black;
    font-size: 2rem;
    font-weight: 600;
`

export const Subtitle = styled.p`
    color: rgb(60, 60, 60);
    font-size: 1.5rem;
    font-weight: 500;
`

export const Button = styled.button`
    background-color: #e50914;
    width: 100%;
    padding: 10px 20px;
    font-size: 2rem;
    color: white;
`
