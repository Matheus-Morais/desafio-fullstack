import React from 'react';

import {
    Container,
    Content,
    Logo,
    Form,
} from './styles';

const SignUp: React.FC = () => {
    return (
        <Container>
            <Content>
                <Logo />
                <Form>
                    <p>Informe seus dados</p>
                </Form>
            </Content>
        </Container>
    );
}

export default SignUp;
