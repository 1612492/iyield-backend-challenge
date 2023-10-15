import { formatBalance } from './format';

it('can format balance', () => {
  expect(formatBalance('0.000000123456789')).toBe('0.0000001235');
  expect(formatBalance('0.123456789000000')).toBe('0.1235');
  expect(formatBalance('1.234567890000000')).toBe('1.235');
  expect(formatBalance('12.34567890000000')).toBe('12.35');
  expect(formatBalance('123.4567890000000')).toBe('123.46');
  expect(formatBalance('1234.567890000000')).toBe('1,234.57');
  expect(formatBalance('1.200000000000001')).toBe('1.2');
  expect(formatBalance('1.000000000000001')).toBe('1');
  expect(formatBalance('123456789.0000001')).toBe('123,456,789');
});
