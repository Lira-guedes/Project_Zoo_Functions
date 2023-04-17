// const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const employeesId = (id) => data.employees
  .find((element) => element.id === id);

const employeesName = (name) => data.employees
  .find((element) => element.firstName === name || element.lastName === name);

const speciesName = (speciesN) => data.species
  .filter((element) => speciesN.includes(element.id)).map((element) => element.name);

const speciesLocation = (speciesL) => data.species
  .filter((element) => speciesL.includes(element.id)).map((element) => element.location);

const setEmployeesObj = (speciesN) => ({
  id: speciesN.id,
  fullName: `${speciesN.firstName} ${speciesN.lastName}`,
  species: speciesName(speciesN.responsibleFor),
  locations: speciesLocation(speciesN.responsibleFor),
});

const getEmployeesCoverage = (employee) => {
  if (!employee) return data.employees.map((element) => setEmployeesObj(element));
  const { name, id } = employee;
  const employeeNameId = employeesId(id) || employeesName(name);
  // console.log(employeeNameId);
  // const employeeNameId = data.employees
  //   .find((element) => element.fullName.includes(employeesName(name) || element.id.includes(employeesId(id))));
  if (!employeeNameId) throw new Error('Informações inválidas');
  return setEmployeesObj(employeeNameId);
};
// console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
