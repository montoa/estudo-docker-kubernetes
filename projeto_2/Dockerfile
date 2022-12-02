# definir versão de qual container iremos utilizar
FROM node:alpine

# definir diretório dentro do container
WORKDIR /usr/app

# copiar os arquivos e diretórios para dentro do container
COPY package*.json ./
RUN apk update && apk add git
#RUN npm install --force

# copia todo o restante dos arquivos para dentro do container
COPY . .

# porta que o container ira expor para acessar a aplicação
EXPOSE 3000

# comando default a ser executado ao iniciar o container
CMD ["npm", "start"]