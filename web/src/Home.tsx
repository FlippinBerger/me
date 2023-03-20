import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100%;
`

export const Home = () => {
    return (
        <Container>
            This is the home page.
        </Container>
    )
}