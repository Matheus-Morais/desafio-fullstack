import styled from 'styled-components';

import Profitfy from '../../assets/logo.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 550px;
`;

export const Logo = styled.img.attrs({
    src: Profitfy,
    alt: "Profitfy.me",
})`
    flex: 1;
    width: 363px;
    margin-bottom: 26px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #F8F9FE;
    border-radius: 6px;

    width: 100%;
    max-width: 547px;

    p {
        margin-top: 44px;
        margin-bottom: 22px;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;

        letter-spacing: 0.01em;

        color: #94A3B3;
    }
`;

