module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      headLine: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      subHead: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        img: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      author: {
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        img: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      cover: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
    );
    return Article;
  };