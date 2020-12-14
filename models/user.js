module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    });

    return user;
  };