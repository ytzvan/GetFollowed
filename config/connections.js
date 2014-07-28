//Connection to MongoHQ
module.exports.connections = {
  mongodb: {
    adapter   : 'sails-mongo',
    host      : 'YOUR_DB_HOST',
    port      : 'YOUR_DB_PORT',
    user      : 'YOUR_DB_UN',
    password  : 'YOUR_DB_PW',
    database  : 'YOUR_DB'
  }
}