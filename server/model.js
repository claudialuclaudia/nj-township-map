module.exports = (sequelize, Sequelize) => {
  const Mytable = sequelize.define("mytable", {
    county_id: {
      type: Sequelize.INTEGER,
    },
    county_name: {
      type: Sequelize.STRING,
    },
    district_id: {
      type: Sequelize.INTEGER,
    },
    district_name: {
      type: Sequelize.STRING,
    },
    line_no: {
      type: Sequelize.INTEGER,
    },
    account: {
      type: Sequelize.STRING,
    },
    line_desc: {
      type: Sequelize.STRING,
    },
    amount_1: {
      type: Sequelize.INTEGER,
    },
    amount_2: {
      type: Sequelize.INTEGER,
    },
    amount_3: {
      type: Sequelize.INTEGER,
    },
  });

  return Mytable;
};
