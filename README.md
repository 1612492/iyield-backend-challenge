# iYield Backend Coding Challenge

This coding challenge is for the iYield Backend Developer position. If you have not
applied for this job you can do so at https://iyield.bamboohr.com/careers.

To submit your solution to this challenge:
1. Solve the task below and push your code to a **private** GitHub repository.
2. Add the user `iYieldCrypto` as a collaborator to your repo.
3. Reply to the email you received inviting you to take this challenge and include a link
   to your repository.

## Task

Build a web server that allows the user to request the balance of ethereum addresses. The
response should should be a map of the supplied addresses to balances in ETH. The balances
should be formatted in a human-readable way:

```json
{
  "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045": "934.04",
  "0xedf37e7fc70a97c5d1752cd909e0183b5bd23b27": "0.007021",
  "whoops-this-isnt-a-valid-address": "0"
}
```

The rules for formatting the values are as follows:
- always show at least 2 decimal places
- always show at least 4 [significant figures](https://en.wikipedia.org/wiki/Significant_figures)
- don't show more decimal places than required
- after applying the above rules remove any trailing zeros after the decimal place
- a comma should be used for the [thousands seperator](https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping)

For example:

| actual balance    | formatted balance |
| ---               | ---               |
| 0.000000123456789 | 0.0000001235      |
| 0.123456789000000 | 0.1235            |
| 1.234567890000000 | 1.235             |
| 12.34567890000000 | 12.35             |
| 123.4567890000000 | 123.46            |
| 1234.567890000000 | 1,234.57          |
| 1.200000000000001 | 1.2               |
| 1.000000000000001 | 1                 |
| 123456789.0000001 | 123,456,789       |

If the user supplies an invalid address the server should return a balance of `0`.

The expected request format is left up to you.

Your solution should be written in TypeScript but you can use whatever web framework,
3rd party libraries and APIs you want. To retrieve ethereum balances you may find the
[ethers package](https://github.com/ethers-io/ethers.js/) and the
[Alchemy API](https://www.alchemy.com/) helpful.

The code you write should be production quality and therefore have an appropriate level
of type safety, tests and documentation about how to run your server and use the API.
