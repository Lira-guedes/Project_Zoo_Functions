const data = require('../data/zoo_data');

// // mostra os dias disponiveis de acordo com o animal
// const getDaysOfAnimals = (animalSelected) => data.species
//   .find((element) => element.name === animalSelected).availability;

// // mostra os animais disponiveis de acordo com o dia
// const getAnimalsOfDays = (weekDay) => data.species
//   .filter((element) => element.availability === weekDay)
//   .map((element) => element.name);

// // cria objeto shedule com todas as disponibilidades
// const getSheduleAvailability = (Day) => {
//   const schedule = {
//     [Day]: {
//       officeHour: `Open from ${data.hours[Day].open}am until ${data.hours[Day].close}pm`,
//       exhibition: getAnimalsOfDays(Day),
//     },
//   };
//   return schedule;
// };
// const closed = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
// const weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
//   'Tuesday', 'Friday', 'Saturday'];
// const animals = data.species.map((animal) => animal.name);

// // const getSchedule = (scheduleTarget) => {
// //   if (scheduleTarget === 'Monday') return closed;
// //   if (weekArray.includes(scheduleTarget)) {
// //     return getSheduleAvailability(scheduleTarget);
// //   }
// //   if (animals.includes(scheduleTarget)) {
// //     return getDaysOfAnimals(scheduleTarget);
// //   }
// //   if (data.species.some((element) => element.name === scheduleTarget) === true) {
// //     return getDaysOfAnimals(scheduleTarget);
// //   }
// //   if (!scheduleTarget) return getSheduleAvailability;
// // };

// console.log(getSchedule('lions'));
// module.exports = getSchedule;
