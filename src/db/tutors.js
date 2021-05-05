module.exports = (sequelize, DataTypes) => {
    const Tutor = sequelize.define(
      "tutor",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
      },
      {
        timestamps: false,
      }
    );
    return Tutor;
  };