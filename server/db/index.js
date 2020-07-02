const db = require('./db')
const Business = require('./models/business')
const User = require('./models/customer')
const Tier = require('./models/tier')
const Subscription = require('./models/subscription')
const Customer = require('./models/customer')

User.belongsToMany(Business, {through: Subscription})
Business.belongsToMany(User, {through: Subscription})
Tier.belongsTo(Business)
Business.hasMany(Tier)
Subscription.belongsTo(Tier)
Tier.hasOne(Subscription)
// register models
require('./models')

module.exports = {
  db,
  Business,
  Tier,
  Subscription,
  User,
  Customer
}
