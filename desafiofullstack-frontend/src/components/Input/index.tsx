import React, { InputHTMLAttributes } from 'react';

import {
    Container,
    Icon
} from './styles';

import UserAltSolid from '../../assets/user-alt-solid.png';
import UserCircleSolid from '../../assets/user-circle-solid.png';
import EnvelopeSolid from '../../assets/envelope-solid.png';
import Brazil from '../../assets/brazil.png';
import UnlockSolid from '../../assets/unlock-alt-solid.png';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    iconName: string;
}

const Input: React.FC<InputProps> = ({ name, iconName, ...rest }) => {

    //Retorna o determinado icon para o input requisitado

    function getIcon() {
        if (iconName === "UserAltSolid") {
            return UserAltSolid
        }
        else if (iconName === "UserCircleSolid") {
            return UserCircleSolid
        }
        else if (iconName === "EnvelopeSolid") {
            return EnvelopeSolid
        }
        else if (iconName === "Brazil") {
            return Brazil
        }
        else if (iconName === "UnlockSolid") {
            return UnlockSolid
        }
    }

    return (
        <Container>
            <Icon src={getIcon()} />
            <input {...rest} />
        </Container>
    )
}

export default Input
