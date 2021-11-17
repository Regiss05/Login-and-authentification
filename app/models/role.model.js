module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },

        name: {
            type: Sequelize.INTEGER
        }
    });

    return Role;
};
