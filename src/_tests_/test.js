import calculateHealthPoints from '../healthPoints';

test('healthy personage', () => {
  const result = calculateHealthPoints({
    name: 'Маг',
    health: 90,
  });
  expect(result).toBe('healthy');
});

test('wounded personage', () => {
  const result = calculateHealthPoints({
    name: 'Боевой гном',
    health: 40,
  });
  expect(result).toBe('wounded');
});

test('critical personage', () => {
  const result = calculateHealthPoints({
    name: 'Солдат',
    health: 10,
  });
  expect(result).toBe('critical');
});
