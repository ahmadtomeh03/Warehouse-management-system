/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Mechanisms', function(table) {
        table.increments('Mechanisms_id').primary(); // Auto-incrementing ID
        table.string('Mechanisms_Name').notNullable(); // Mechanism name, required
        table.decimal('Price', 10, 2).notNullable(); // Price with precision 10 and scale 2, required

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Mechanisms');
};
