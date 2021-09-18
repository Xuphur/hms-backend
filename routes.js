'use strict';

module.exports = function(app) {
    // app.use('/veh', require('./api/vehicles'));
    // app.use('/user', require('./api/users'));
    app.use('/contract', require('./api/contract'));
    app.use('/customer', require('./api/customer'));
    app.use('/asset', require('./api/asset'));
    app.use('/reciept', require('./api/reciept'));
    app.use('/user', require('./api/users'));
}