import express from 'express';
import axios from 'axios';

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

app.get('/external-users/', async (request, response) => {
    const users = await axios.get('http://demo8362249.mockable.io/users');
    return response.json( {
        message: `Buscando usuários externos.`, 
        data: users.data
    })
});

module.exports = app;