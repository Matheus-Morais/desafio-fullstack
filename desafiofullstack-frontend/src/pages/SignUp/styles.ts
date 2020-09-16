import styled from 'styled-components';

import Profitfy from '../../assets/logo.png';

interface InfoProps {
    fontWeight: string,
    fontSize: string,
    marginTop: string,
    marginBottom: string,
}

export const Container = styled.div`
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
    margin-top: 128px;
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
`;

export const Info = styled.p<InfoProps>`
    line-height: 22px;
    color: #94A3B3;
    letter-spacing: 0.01em;

    margin-top: ${props => props.marginTop}px;
    margin-bottom: ${props => props.marginBottom}px;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize}px;
`;

export const ContainerUseTerms = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const ContainerOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;
    margin-bottom: 346px;

    width: 100%;
    max-width: 547px;
`;

export const LinkOptions = styled.a`
    text-decoration: none;

    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.01em;

    color: #fff;
`;

