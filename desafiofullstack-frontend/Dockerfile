# Versão do Node
FROM node:12.18.2

# Cria o diretório no container nessa determinada pasta
WORKDIR /usr/src/app

# Instala as dependencias do app
COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
