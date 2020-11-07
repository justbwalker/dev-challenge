# dev-challenge
backend nodejs challenge

http://localhost:3030/api/movies?language=Espa%C3%B1ol&sort_by=title


http://localhost:3030/api/tv-shows/1/seasons/1/episodes/3

POST http://localhost:3030/api/actors 
{
name: "Tim Burton",
gender: "Masculino",
createdAt: "2020-11-07T03:04:59.128Z",
updatedAt: "2020-11-07T03:04:59.128Z"
}

POST http://localhost:3030/api/auth/login
{
"username": "jhon", "password": "doe"
}

POST http://localhost:3030/api/auth/refresh
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impob24iLCJpYXQiOjE2MDQ3NTY4NjksImV4cCI6MTYwNDc1ODMwOX0.9r9Ue-Xa_z_bWXqiFUxI49Qds7rPvVyNnwqz2p5Mty0"
}