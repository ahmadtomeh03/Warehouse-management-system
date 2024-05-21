module.exports = {
    client: 'mysql',
    connection: {
        host: 'localhost',// if i work in server must i write server ip
        user: 'house',
        password: '12345',
        database: 'warehouse',
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations',
    },
};
