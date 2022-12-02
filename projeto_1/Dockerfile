# começa com uma imagem de Node.js 10 (LTS)
FROM node:10

# especifica o diretório da imagem no qual todos os comadnos serão executados
WORKDIR /usr/src/app

# copia os arquivos do pacotes e instala as dependencias

COPY packages*.json ./
RUN npm install

# copia todos os arquivos da aplicação para a imagem
COPY . .

# comando default a ser executado para iniciar o container
CMD [ "npm", "start" ]

