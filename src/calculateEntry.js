const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => (
  {
    child: entrants.filter((element) => element.age < 18).length,
    adult: entrants.filter((element) => element.age >= 18 && element.age < 50).length,
    senior: entrants.filter((element) => element.age >= 50).length,
  }
);

const calculateEntry = (entrant) => {
  if (!entrant || entrant === 0) return 0;
  const finalValue = (countEntrants(entrant).child * prices.child)
  + (countEntrants(entrant).senior * prices.senior)
  + (countEntrants(entrant).adult * prices.adult);
  return parseFloat(finalValue.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
