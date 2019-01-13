module.exports = function (sequelize, DataTypes) {
  const Parent = sequelize.define('Parent', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })
  return Parent
}
