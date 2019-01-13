module.exports = function (sequelize, DataTypes) {
  const ParentStudent = sequelize.define('ParentStudent', {
    ParentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Parents',
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
    }
  })
  ParentStudent.associate = function (models) {
    const { Parent, Student } = models
    const options = { onDelete: 'CASCADE' }
    ParentStudent.belongsTo(Parent, options)
    ParentStudent.belongsTo(Student, options)
  }
  return ParentStudent
}
