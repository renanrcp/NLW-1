import Knex from 'knex';

export const up = async (knex: Knex) => {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
};

export const down = (knex: Knex) => {
    return knex.schema.dropTableIfExists('items');
};