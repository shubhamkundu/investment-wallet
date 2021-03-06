const { userService, walletService, mfService } = require('./../service');

module.exports = ({ app, User, Transaction, Order, sequelize }) => {
    require('./user')({ app, userService, User });
    require('./wallet')({ app, walletService, User, Transaction, sequelize });
    require('./mf')({ app, mfService, Order, walletService, User, Transaction, sequelize });
};