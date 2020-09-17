# **Frontend do desafio Full Stack**

Essa aplicação possui uma unica rota, sendo ela a rota raiz.

## Funcionamento

O funcionamento dessa aplicação é bem simples. Basta rodar ```yarn``` ou ```npm install```.

Assim que instalar as dependencias é só rodar ```yarn start``` ou ```npm start```

## Observações

- O projeto foi contruído utilizando o modelo ```TypeScript```.

- Está sendo utilizado a lib ```unform``` para a criação do formulário. E a lib ```yup``` para a validação dos dados.

- Para criação do template foi criado apenas uma pagina, chamada ```SignUp```. E 4 componentes, sendo eles:
    - ```Button```: Retorna um botão estilizado com um icon ao lado.

    - ```Input```: Retorna um input do formulário, com o icon referente a ele.

    - ```InputMasked```: Retorna um input do fomulário, com uma opção de máscara, que foi utilizado apenas no campo de ```phone```.

    - ```Tooltip```: Retorna uma mensagem de erro ao lado do input que contém uma informação inválida.

- Para comunicação com a api foi utilizado o ```axios```.

- Os erros na validação dos dados são buscados através do yup, e normalizados pela função ```getValidationErrors```, que pega todos os erros e retorna um objeto contendo todas as mensagens principais dos erros.

- O ```unform``` tem uma propriedade chamada ```useField```, que é o responsável por gerenciar um determinado input. E com ele é possível mostrar as informações do input, referente a erro, valor, tipo e etc. Então juntamente com a referência do formulário e o ```yup```, é possível informar a um input que a informação nele está incorreta.

## Requisitos

- [x] TypeScript
- [x] React.js
- [x] Clean Architecture
- [x] Docker
- [ ] Testes automatizados
