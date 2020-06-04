import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Diego',
    'Cleiton',
    'Robson'
]

app.get('/users', (req, res) => {
    const search = String(req.query.search);

    const filteredUsers = search
        ? users.filter(a => a.includes(search))
        : users;

    return res.json(filteredUsers);
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const user = users[id];

    return res.json(id);
});

app.post('/users', (req, res) => {
    const data = req.body;

    return res.json(data);
});

app.listen(3333);