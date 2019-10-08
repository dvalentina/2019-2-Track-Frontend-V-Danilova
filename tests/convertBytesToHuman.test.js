/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from '../convertBytesToHuman.js';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(0.1)).toBe(false);
  expect(convertBytesToHuman('blabla')).toBe(false);
  expect(convertBytesToHuman('10blabla')).toBe(false);
  expect(convertBytesToHuman(-10)).toBe(false);
  expect(convertBytesToHuman(true)).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');
  expect(convertBytesToHuman(0.00)).toBe('0 B');
  expect(convertBytesToHuman(1023)).toBe('1023 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(1048576)).toBe('1 MB');
  expect(convertBytesToHuman(2147483648)).toBe('2 GB'); 
  expect(convertBytesToHuman(2199023255552)).toBe('2 TB');
  expect(convertBytesToHuman(2251799813685248)).toBe('2 PB');
  expect(convertBytesToHuman(8888)).toBe('8.68 KB');
});

