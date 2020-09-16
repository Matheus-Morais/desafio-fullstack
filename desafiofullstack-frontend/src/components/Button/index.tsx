import React, { ButtonHTMLAttributes } from 'react';

import paperPlaneSolid from '../../assets/paper-plane-solid.png';

import {
    Container,
    Icon
} from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container type='button' {...rest}>
        <Icon src={paperPlaneSolid} />
        {children}
    </Container>
);

export default Button
