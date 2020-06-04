import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return res.json(serializedItems);
});

routes.post('/points', async (req, res) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = req.body;

    await knex('points').insert({
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        image: 'image-fake',
    });

    return res.json({ sucess: true });
});

export default routes;