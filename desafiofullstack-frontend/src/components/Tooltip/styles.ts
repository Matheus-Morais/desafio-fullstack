import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    span{
        padding: 8px;
        border-radius: 4px;
        font-size:14px;
        text-align: center;
        opacity: 0;
        transition: opacity 0.4s;

        position: absolute;
        bottom: calc(100% + 12px);
        width: 120px;

        /* Isso faz com que o objeto fique bem no centro */
        left: 50%;
        transform: translateX(-50%);

        color: #312e38;

        &::before{
            content: '';
            border-style: solid;
            border-width: 6px 6px 0 6px;
            bottom: 920px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
        opacity: 1;
    }
`;
