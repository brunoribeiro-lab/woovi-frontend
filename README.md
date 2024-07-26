[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# Woovi Frontend 

Desafio Woovi Frontend

[![Woovi][screenshot]](https://woovi.com/jobs/challenges/frontend-engineer/)

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Uso](#uso)
- [Docker](#docker)
- [Contribuição](#contribuição)
- [Licença](#licença)

### Construído Com

Abaixo está as tecnologias usadas no desenvolvimento desse projeto.

* [React](https://react.dev/) 

## Instalação

Veja abaixo todos os passos para fazer a instalação corretamente da aplicação.


### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/)

### Passos

1. Clone o repositório

```sh
git clone https://github.com/brunoribeiro-lab/woovi-frontend.git
```
2. Navegue até o diretório do projeto

```sh
cd nome-do-repositorio
```

3. Instale as dependências

```sh
npm install
```

## Uso

### Desenvolvimento

Para rodar a aplicação em modo de desenvolvimento:

```sh
npm start
```

Abra http://localhost:3000 para visualizar no navegador.

### Produção

Para construir a aplicação para produção:

```sh
npm build
```

Os arquivos construídos serão armazenados na pasta `build`.

## Docker

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Passos

1. Construa a imagem Docker e inicie os contêineres

```sh
docker-compose up -d --build
```

2. Acesse a aplicação

Abra http://localhost:5000 no navegador.


## Roadmap
 
- [X] Finalizar Desafio
- [ ] Melhorar a validação na tela de cartão de crédito

## Contribuição

1. Faça um Fork do projeto
2. Crie uma nova branch (git checkout -b feature/nome-da-feature)
3. Faça as alterações necessárias e commit (git commit -m 'Adicionei nova funcionalidade')
4. Faça o push para a branch (git push origin feature/nome-da-feature)
5. Abra um Pull Request


### Autores

* **Bruno Ribeiro  - [Linkedin](https://www.linkedin.com/in/bruno-ribeiro-46675922a/) - bruno.ribeiro.lab@gmail.com**
 
### Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.


[contributors-shield]: https://img.shields.io/github/contributors/brunoribeiro-lab/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/brunoribeiro-lab/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/brunoribeiro-lab/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/brunoribeiro-lab/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/brunoribeiro-lab/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/brunoribeiro-lab/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/brunoribeiro-lab/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/brunoribeiro-lab/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/brunoribeiro-lab/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/brunoribeiro-lab/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bruno-ribeiro-46675922a/
[screenshot]: public/challenge.png
