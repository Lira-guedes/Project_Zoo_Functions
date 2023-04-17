const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  test('Média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('Localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('Um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toContain('Friday', 'Saturday', 'Sunday', 'Tuesday');
  });
  test('Não passando argumentos a função deve retornar `undefined`', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
