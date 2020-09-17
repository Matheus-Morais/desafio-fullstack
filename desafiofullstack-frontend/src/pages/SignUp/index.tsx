import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import InputMasked from '../../components/InputMasked';
import Button from '../../components/Button';

import {
    Container,
    Content,
    Logo,
    Info,
    FormContainer,
    ContainerUseTerms,
    Link,
    ContainerOptions,
    LinkOptions
} from './styles';

interface SignUpFormData {
    name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    confirm_password: string;
}

const SignUp: React.FC = () => {
    //referencia do formulário
    const formRef = useRef<FormHandles>(null)

    //Função que verifica os dados antes de enviar para api
    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        //Instacia a referencia do formulario sem error
        formRef.current?.setErrors({})

        //Schema do yup para validar os dados
        const schema = Yup.object().shape({
            name: Yup.string().required('Nome é obrigatório'),
            last_name: Yup.string().required('Sobrenome é obrigatório'),
            email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),
            phone: Yup.string().required('Telefone é obrigatório'),
            password: Yup.string().min(8, 'Senha deve ter no minimo 8 digitos'),
            confirm_password: Yup.string().min(8, 'Senha deve ter no minimo 8 digitos'),
        })

        try {
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (e) {
            //Pega os error do yup
            if (e instanceof Yup.ValidationError) {
                const errors = getValidationErrors(e)
                //Seta os erros no formulário
                formRef.current?.setErrors(errors)
                return
            }
        }

        //normalizando phone
        data.phone = await `55${data.phone.replace(/\D+/g, "")}`

        //Conexão com a api
        try {
            await api.post('/new-user', data)
        } catch (e) {
            let msgsErrors = '';
            if (e.response.data.errors) {
                for (let error of e.response.data.errors) {
                    msgsErrors = `${msgsErrors}${error}\n`;
                }
            }

            alert(msgsErrors);
            return
        }

        alert("Usuário cadastrado com sucesso!")
        return
    }, [])

    return (
        <Container>
            <Content>
                <Logo />
                <FormContainer ref={formRef} onSubmit={handleSubmit}>
                    <Info fontWeight={'600'} fontSize={'16'} marginBottom={'30'} marginTop={'44'}>Informe seus dados</Info>

                    <Input name="name" iconName="UserAltSolid" placeholder="Nome" />

                    <Input name="last_name" iconName="UserCircleSolid" placeholder="Sobrenome" />

                    <Input name="email" iconName="EnvelopeSolid" placeholder="Email Pessoal" />

                    <InputMasked name="phone" type="text" iconName="Brazil" mask="(99) 9 9999-9999" />

                    <Input name="password" type="password" iconName="UnlockSolid" placeholder="Senha" />

                    <Input name="confirm_password" type="password" iconName="UnlockSolid" placeholder="Confirmar senha" />

                    <ContainerUseTerms>
                        <Info fontWeight={'normal'} fontSize={'12'} marginBottom={'18'} marginTop={'8'}>
                            Ao se cadastrar você automaticamente concorda com nossos
                        <Link href="#"> Termos de Uso</Link>
                        </Info>
                    </ContainerUseTerms>

                    <Button type="submit">Cadastrar</Button>
                </FormContainer>

                <ContainerOptions>
                    <LinkOptions href="#">Esqueceu sua senha?</LinkOptions>

                    <LinkOptions href="#">Entrar</LinkOptions>
                </ContainerOptions>
            </Content>
        </Container>
    );
}

export default SignUp;
