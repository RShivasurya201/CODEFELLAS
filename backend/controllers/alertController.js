const alerts = require('../mock/alerts.json');

const getAlerts = (req, res) => {
  res.json(alerts);
};

module.exports = { getAlerts };
