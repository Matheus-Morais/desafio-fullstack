import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 11px 12px;

    margin-bottom: 24px;

    width: 84%;

    color: #A0A4A8;

    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25), 0px 1px 3px rgba(0, 0, 0, 0.02);

    display: flex;
    align-items: center;

    input {
        color: #A0A4A8;
        flex: 1;
        background: transparent;
        border: 0;
    }

    & + div {
        margin-top: 8px;
    }
`;

export const Icon = styled.img`
    width: 16px;
    margin-right: 12px;
`;

