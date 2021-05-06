module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
    return Review;
  };