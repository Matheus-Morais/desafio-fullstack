import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Content,
    Logo,
    Info,
    Form,
    ContainerUseTerms,
    Link,
    ContainerOptions,
    LinkOptions
} from './styles';

const SignUp: React.FC = () => {
    return (
        <Container>
            <Content>
                <Logo />
                <Form>
                    <Info fontWeight={'600'} fontSize={'16'} marginBottom={'30'} marginTop={'44'}>Informe seus dados</Info>

                    <Input name="name" iconName="UserAltSolid" placeholder="Nome" />

                    <Input name="last_name" iconName="UserCircleSolid" placeholder="Sobrenome" />

                    <Input name="email" iconName="EnvelopeSolid" placeholder="Email Pessoal" />

                    <Input name="phone" iconName="Brazil" placeholder="" />

                    <Input name="password" type="password" iconName="UnlockSolid" placeholder="Senha" />

                    <Input name="confirm_password" type="password" iconName="UnlockSolid" placeholder="Confirmar senha" />

                    <ContainerUseTerms>
                        <Info fontWeight={'normal'} fontSize={'12'} marginBottom={'18'} marginTop={'8'}>
                            Ao se cadastrar você automaticamente concorda com nossos
                        <Link href="#"> Termos de Uso</Link>
                        </Info>
                    </ContainerUseTerms>

                    <Button type="submit">Cadastrar</Button>

                </Form>
                <ContainerOptions>
                    <LinkOptions href="#">Esqueceu sua senha?</LinkOptions>

                    <LinkOptions href="#">Entrar</LinkOptions>
                </ContainerOptions>
            </Content>
        </Container>
    );
}

export default SignUp;
