# <p align = "center"> Projeto RepoProvas API</p>

<p align="center">
   <img src="https://iili.io/s2pCFt.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-jvcamargo02-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/jvcamargo02/projeto20-repoprovas?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

It is a project for registering and viewing tests. With it, it is possible to register tests of a specific subject (previously added to the database), relating to the test category (previously added to the database. Ex.: tests, retake tests) and also relating to a teacher (previously added to the database). The visualization of the data can be ordered by subjects or professors.

***

## :computer:	 Technologies and applied knowledge

- REST APIs
- JWTs
- Node.js
- TypeScript
- Postgres
- Prisma (TypeORM)
- Jest


***

## :rocket: Routes

```yml
POST /signup
    - Route to sign-up
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremipsum",
        "passwordConfirm": "loremipsum"
}
```
    
```yml 
POST /signin
    - Route to login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
```

```yml 
POST /test (authenticated)
    - Route to register a new test
    - headers: { Authorization: "Bearer <token>" }
    - body: {
        "name": "Lorem Ipsun",
        "pdfUrl": "https://google.com",
        "category": "<Name of a previously saved category in the database>",
        "discipline": "<Name of a previously saved discipline in the database>",
        "teacher": "<Name of a previously saved teacher in the database>"
    }
```
    
```yml 
GET /test/disciplines (authenticated)
    - Route to list all tests ordered by discipline
    - headers: { Authorization: "Bearer <token>" }
    - body: {}
```

```yml
GET test/teacher (authenticated)
    - Route to list all tests ordered by teacher
    - headers: { Authorization: "Bearer $token" }
    - body: {}
``` 

***

## 🏁 How to run

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First step: clone this project

```
git clone https://github.com/jvcamargo02/projeto20-repoprovas.git
```

Second step: inside the project folder, run the command

```
npm install
```

Third Step: Create an .env file inside the project folder following the example
```
DATABASE_URL="<postgresql://USER:PASSWORD@HOST:PORT/DATABASE>"
JWT_SECRET="<secret>"
```

Finally, populate the database and start the application with the command:
```
npx prisma migrate dev && npx prisma db seed &&  npx ts-node ./src/server.ts
```
