const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employeesById = data.employees
    .find((element) => element.id === id).responsibleFor[0];
  const animalByEmployees = data.species
    .find((element) => element.id === employeesById);
  const { name, sex, age } = animalByEmployees.residents
    .reduce((acc, curr) => (acc.age < curr.age ? curr : acc));
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
