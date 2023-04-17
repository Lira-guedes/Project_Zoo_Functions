const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const obj = {};
  if (!animal) {
    data.species.forEach((element) => { obj[element.name] = element.residents.length; });
    return obj;
  }

  const { species: sp, sex: sx } = animal;
  return data.species.find((element) => element.name === sp)
    .residents.filter((elementt) => !sx || elementt.sex === sx).length;
};

console.log(countAnimals({ species: 'penguins', sex: 'female' }));
module.exports = countAnimals;
