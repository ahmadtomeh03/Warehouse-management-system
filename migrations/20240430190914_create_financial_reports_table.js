/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Financial_Reports', function(table) {
        table.increments('reports_id').primary();
        table.decimal('revenue', 10, 2).notNullable().defaultTo(0.00);
        table.decimal('expenses', 10, 2).notNullable().defaultTo(0.00);
        table.decimal('profit', 10, 2).notNullable().defaultTo(0.00);
        table.timestamp('report_date').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Financial_Reports');

};
