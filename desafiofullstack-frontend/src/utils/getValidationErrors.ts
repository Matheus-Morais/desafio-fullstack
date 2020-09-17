import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string
}

//Função que retorna os erros como um objeto
export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {};

    //Para cada error retorna a mensagem principal dele
    err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
    });
    return validationErrors;
}
