const router = require('express').Router();
const PizzaRoutes = require('./pizza-routes');

router.use('/pizzas', PizzaRoutes);

module.exports = router;