const resource = require('../mock/resources.json');
const patients = require('../mock/patients.json');

const getDashboardData = (req, res) => {
  res.json({
    resource,
    patients
  });
};

module.exports = { getDashboardData };
