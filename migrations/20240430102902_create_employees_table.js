/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('employees', function (table) {
        table.increments('id').primary();  // Auto-incrementing primary key
        table.string('name').notNullable();  // Name of the employee
        table.string('phone').notNullable();  // Phone number of the employee
        table.date('date_join').notNullable();  // Date when the employee joined
        table.decimal('salary', 14, 2).notNullable();  // Salary of the employee
        table.string('employee_role').notNullable();  // Role of the employee in the company
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('employees');
};
