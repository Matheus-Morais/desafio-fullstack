import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

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
    const inputRef = useRef<HTMLInputElement>(null)
    const { fieldName, defaultValue, registerField } = useField(name)

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

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField])

    return (
        <Container>
            <Icon src={getIcon()} />
            <input
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
        </Container>
    )
}

export default Input
