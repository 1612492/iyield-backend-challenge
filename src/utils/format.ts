import BigNumber from 'bignumber.js';

export function formatBalance(balance: string, decimalPlaces = 2, significantDigits = 4) {
  const precision = BigNumber(balance)
    .precision(significantDigits, BigNumber.ROUND_HALF_UP)
    .toFormat();

  const [, decimalPart = ''] = precision.split('.');

  if (decimalPart.length < 2) {
    return BigNumber(balance).decimalPlaces(decimalPlaces, BigNumber.ROUND_HALF_UP).toFormat();
  }

  return precision;
}
