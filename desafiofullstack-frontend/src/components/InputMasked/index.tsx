import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactInputMask, { Props } from 'react-input-mask';
import { FiAlertCircle } from 'react-icons/fi';

import {
    Container,
    Icon,
    Error
} from './styles';

import UserAltSolid from '../../assets/user-alt-solid.png';
import UserCircleSolid from '../../assets/user-circle-solid.png';
import EnvelopeSolid from '../../assets/envelope-solid.png';
import Brazil from '../../assets/brazil.png';
import UnlockSolid from '../../assets/unlock-alt-solid.png';

interface InputProps extends Props {
    name: string;
    iconName: string;
}

const InputMasked: React.FC<InputProps> = ({ name, iconName, ...rest }) => {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

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
            setValue(ref: any, value: string) {
                ref.setInputValue(value);
            },
            clearValue(ref: any) {
                ref.setInputValue('');
            },
        })
    }, [fieldName, registerField])

    return (
        <Container>
            <Icon src={getIcon()} />
            <ReactInputMask
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />
            {error &&
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={18} />
                </Error>
            }
        </Container>
    )
}

export default InputMasked
