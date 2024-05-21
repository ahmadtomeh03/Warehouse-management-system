/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Customers', function(table) {
        table.increments('Customers_id').primary();
        table.string('Email').notNullable().unique();
        table.string('Name').notNullable();
        table.string('password').notNullable();
        table.string('phone').notNullable();
        table.integer('reserved_space').notNullable().defaultTo(0);
        table.decimal('payment_amount', 10, 2).notNullable().defaultTo(0.00);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Customers');
};
