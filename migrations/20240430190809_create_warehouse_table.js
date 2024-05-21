/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('warehouse', function(table) {
        table.increments('warehouse_id').primary();
        table.string('warehouse_name').notNullable();
        table.integer('Available_space').notNullable().defaultTo(1000); // Changed default value to 1000
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('warehouse');
};
