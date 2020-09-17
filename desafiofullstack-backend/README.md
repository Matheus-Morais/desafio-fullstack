# **Backend do desafio Full Stack**

Essa api possui um único endpoint, sendo ele: ```localhost:PORT/v1/new-user```

Que recebe o seguinte body request:
```
{
    "name": "Matheus",
    "last_name": "Morais",
    "phone": "5511999999999",
    "email": "matheus@matheus.com",
    "password": "12345677",
    "confirm_password": "12345677"
}
```

## Funcionamento

Primeiramente é necessario criar um arquivo ```.env``` na raiz do backend. E nele deve ser adicionado duas variáveis:

1. ```PORT=8080```: Essa variável é responsavel por informar o ```express``` qual a porta que essa aplicação vai rodar.

2. ```STAGE=development```: Essa variável é responsavel por informar qual configuração de bancos de dados essa aplicação vai usar. De acordo com o arquivo ```knexfile.js``` (na raiz do projeto), pode ser escolhido 3 configurações (```development```, ```staging``` e ```production```), de acordo com a necessidade do usuário, onde a opção de ```development``` é a unica que usa o ```Sqlite```, e as outras o ```PostGreSQL```.

## Observações

- Os telefones e os emails são únicos. Não é possível cadastrar um novo usuário com um email ou telefone ja cadastrado.

- O número deve ter 13 caracteres, sendo eles: 
    - Código do país: 55
    - DDD: Referete a sua localização. Ex: 63
    - Seu número: Referente ao seu numero de celular. Ex: 999999999

- O email deve ser realmente um email, ou será retornado um erro.

- A senha deve ter no minimo 8 caracteres. No ato do cadastro ela é encriptada para manter a confidencialidade.

## Requisitos

- [x] NodeJs
- [x] PostgreSQL
- [x] Clean Architecture
- [x] Docker
- [ ] Testes automatizados
