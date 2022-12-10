FROM golang:1.11-alpine

# Instala Node e NPM
RUN apk update && apk upgrade && apk add --no-cache git nodejs bash npm

# Obtém a dependencia para a parte Go da contrução
RUN go get -u github.com/jteeuwen/go-bindata/...
RUN go get github.com/tools/godep

WORKDIR /go/src/github.com/kubernetes-up-and-running/kuadr

# Copia todos os códigos-fontes
COPY . . 

# Este é um conjutnto de variáveis esperado pelo script de contrução
ENV VERBOSE=0
ENV PKG=github.com/kubernetes-up-and-running/kuadr
ENV ARCH=amd64
ENV VERSION=test

# Faz a contrução. Este script faz parte do código-fontes de entrada
RUN build/build.sh

CMD [ "/go/bin/kuard" ] 

# ETAPA 2: Implantação
FROM: alpine

USER: nobody:nobody
COPY --from=build /go/bin/kuard /kuard

CMD [ "/kuard" ]
