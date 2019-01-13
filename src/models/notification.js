module.exports = function (sequelize, DataTypes) {
  const Notification = sequelize.define('Notification', {
    TeacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teachers',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Parents',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    ClassId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Classes',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    StudentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Students',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  })
  Notification.associate = function (models) {
    const { Teacher, Parent, Class, Student } = models
    const options = { onDelete: 'CASCADE' }
    Notification.belongsTo(Teacher, options)
    Notification.belongsTo(Parent, options)
    Notification.belongsTo(Class, options)
    Notification.belongsTo(Student, options)
  }
  return Notification
}
