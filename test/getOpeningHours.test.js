const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('', () => {
    expect(getOpeningHours()).toStrictEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
  //   it('', () => {
  //     expect(getOpeningHours('tUeSDay', '09:00-AM')).toBe('The zoo is open');
  //   });
  it('', () => {
    expect(() => getOpeningHours('Tuesday', '14:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('', () => {
    expect(() => getOpeningHours('Monday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('', () => {
    expect(() => getOpeningHours('Thursday', '09:00-WZ')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('', () => {
    expect(() => getOpeningHours('hsdchsjdbc', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('', () => {
    expect(() => getOpeningHours('Saturday', '09:WZ-AM')).toThrow('The minutes should represent a number');
  });
  it('', () => {
    expect(() => getOpeningHours('Saturday', 'WZ:00-AM')).toThrow('The hour should represent a number');
  });
});
