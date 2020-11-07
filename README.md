# Movies and Tv Shows API

## Considerations
This API only runs with Node.js 14

## How to start

* Clone this repository

* Install the dependencies with NPM
```
npm install
```

* Run
```
npm start
```

* Now if you go to [http://localhost:3030/api/movies](http://localhost:3030/api/movies), you'll get

```json
[
{
id: 1,
title: "Reservoir Dogs",
genre: null,
language: "Ingles",
synopsis: "Seis criminales profesionales son contratados para robar en un almacén de diamantes, pero la policía aparece inesperadamente en el momento del atraco. Algunos miembros de la banda mueren en el enfrentamiento y otros logran huir, reagrupándose en un almacén y dispuestos a descubrir quién los delató.",
createdAt: "2020-11-07T14:38:06.558Z",
updatedAt: "2020-11-07T14:38:06.558Z",
directorId: 1,
director: {
id: 1,
name: "Quentin Tarantino",
gender: null,
birthdate: null,
biography: null,
createdAt: "2020-11-07T14:38:06.527Z",
updatedAt: "2020-11-07T14:38:06.527Z"
}
},
{
id: 2,
title: "Pulp Fiction",
genre: null,
language: "Ingles",
synopsis: "La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención.",
createdAt: "2020-11-07T14:38:06.560Z",
updatedAt: "2020-11-07T14:38:06.560Z",
directorId: 1,
director: {
id: 1,
name: "Quentin Tarantino",
gender: null,
birthdate: null,
biography: null,
createdAt: "2020-11-07T14:38:06.527Z",
updatedAt: "2020-11-07T14:38:06.527Z"
}
},
{
id: 3,
title: "Todo sobre mi madre",
genre: null,
language: "Español",
synopsis: "Una madre soltera reaviva viejas relaciones y hace nuevas a su regreso a Barcelona buscando al padre de su hijo muerto.",
createdAt: "2020-11-07T14:38:06.562Z",
updatedAt: "2020-11-07T14:38:06.562Z",
directorId: 2,
director: {
id: 2,
name: "Pedro Almodobar",
gender: null,
birthdate: null,
biography: null,
createdAt: "2020-11-07T14:38:06.552Z",
updatedAt: "2020-11-07T14:38:06.552Z"
}
},
{
id: 4,
title: "Mujeres al borde de un ataque de nervios",
genre: null,
language: "Español",
synopsis: "Una mujer inestable que busca a su ex amante se encuentra con caos cuando un diverso grupo de extraños entra en su vida.",
createdAt: "2020-11-07T14:38:06.563Z",
updatedAt: "2020-11-07T14:38:06.563Z",
directorId: 2,
director: {
id: 2,
name: "Pedro Almodobar",
gender: null,
birthdate: null,
biography: null,
createdAt: "2020-11-07T14:38:06.552Z",
updatedAt: "2020-11-07T14:38:06.552Z"
}
}
]
```

## Endpoints

### Authentication

* Login:
  
```
POST /api/auth/login
```

To login send username and password in the body
Example: 

```
POST /api/auth/login
body:   {
            "username": "jhon", 
            "password": "doe"
        }
```

* Refresh token:
  
```
POST /api/auth/refresh
```

To refresh send the token in the body
Example: 

```
POST /api/auth/refresh
body:   {
            "token": "the-token-obtained-in-the-login"
        }
```

### Movies

* Get movies list:
* 
```
GET /api/movies
```

To filter add the fields and values wanted as query params
Example:

```
GET /api/movies?language=Ingles&genre=Drama
```

To sort by a filed add sort-by and the field as query param
Example:

```
GET /api/movies?sort-by=title
```

### Tv Shows

* Get tv shows list:
  
```
GET /api/tv-shows
```

* Get an especific episode:
  
```
GET /api/tv-shows/1/seasons/1/episodes/3
```

### Actors

* Get actors list:
  
```
GET /api/actors
```

* Create an actor:
  
```
POST /api/actors
```
Example: 
```
POST http://localhost:3030/api/actors 
body:   {
            name: "Tim Burton",
            gender: "Masculino",
        }
```

### Directors

* Get directors list:
  
```
GET /api/directors
```
