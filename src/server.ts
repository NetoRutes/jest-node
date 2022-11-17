import express from 'express';

const app = express();

const users = ['Tipscode', 'Dukeza', 'Tux', 'Wellington']

app.get('/users', (request, response) =>{
    const name = request.query.name
    return response.json( {
        message: `Buscando o usuário pelo nome ${name}`
    } )
});

app.get('/users/:id', (request, response) => {
    const { id } = request.params;
    return response.json( {
        message: `Buscando o usuário pelo id ${request.params.id}`, 
        data: users[Number(id)]
    })
});

module.exports = app;