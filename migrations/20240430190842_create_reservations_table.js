/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Reservation', function(table) {
        table.increments('reservation_id').primary();
        table.integer('warehouse_id').notNullable();
        table.integer('customer_id').notNullable();
        table.integer('reserved_space').notNullable();
        table.date('reservation_date').notNullable();
    });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Reservation');
};
