module.exports = function (sequelize, DataTypes) {
  const Class = sequelize.define('Class', {
    TeacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teachers',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Class.associate = function (models) {
    const { Teacher } = models
    const options = { onDelete: 'CASCADE' }
    Class.belongsTo(Teacher, options)
  }
  return Class
}
