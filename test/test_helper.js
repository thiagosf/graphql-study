import fs from 'fs'
import path from 'path'
import buffer from 'buffer'
import utils from '../src/helpers/utils'
import models from '../src/models'

const sequelize = models.sequelize

module.exports = {
  importFixture (model) {
    return new Promise((resolve, reject) => {
      const filename = path.join(__dirname, 'fixtures', `${model.name}.json`)
      if (fs.existsSync(filename)) {
        const data = JSON.parse(fs.readFileSync(filename).toString())
        model.destroy({ where: {} }).then(() => {
          return model.bulkCreate(data)
        }).then(resolve).catch(reject)
      } else {
        reject('Fixture not exists')
      }
    })
  },
  importFixtures (items) {
    if (items === 'all') {
      const promises = Object.values(models.sequelize.models).map(model => {
        return () => {
          return this.importFixture(model).catch(error => {
            console.log('-- importFixture error:', error, model.tableName)
          })
        }
      })
      return this.lockKeys().then(() => {
        return utils.queuePromises(promises).then(() => {
          return this.unlockKeys()
        })
      })
    } else {
      const promises = items.map(model => {
        return () => {
          return this.importFixture(model)
        }
      })
      return this.lockKeys().then(() => {
        return utils.queuePromises(promises).then(() => {
          return this.unlockKeys()
        })
      })
    }
  },
  syncDatabase (force = true) {
    return this.lockKeys().then(() => {
      return sequelize.sync({ force }).then(() => {
        return this.unlockKeys().then(() => {
          return models
        })
      })
    })
  },
  lockKeys () {
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true })
  },
  unlockKeys () {
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true })
  },
  getValidToken (id = 1) {
    const { Teacher } = models
    return Teacher.findOne({ where: { id } }).then(teacher => {
      return teacher.loginData().then(teacher => {
        return teacher.token
      })
    })
  }
}
