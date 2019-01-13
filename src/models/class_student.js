module.exports = function (sequelize, DataTypes) {
  const ClassStudent = sequelize.define('ClassStudent', {
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
    isPresent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
  ClassStudent.associate = function (models) {
    const { Class, Student } = models
    const options = { onDelete: 'CASCADE' }
    ClassStudent.belongsTo(Class, options)
    ClassStudent.belongsTo(Student, options)
  }
  return ClassStudent
}
