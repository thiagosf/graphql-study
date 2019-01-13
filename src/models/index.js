const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

let db = {}

const basename = path.basename(__filename)
const url = process.env.DATABASE_URL
const sequelize = new Sequelize(url, {
  logging: process.env.SHOW_QUERIES === 'true',
  dialect: 'mysql'
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

/**
 * Monkey patch issue causing deprecation warning when customizing allowNull validation error
 *
 * See https://github.com/sequelize/sequelize/issues/1500
 */
Sequelize.Validator.notNull = function (item) {
  return !this.isNull(item)
}

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
