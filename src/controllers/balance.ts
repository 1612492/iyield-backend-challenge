import { Response, Request } from 'express';
import { JsonRpcProvider, formatEther, isAddress } from 'ethers';
import { formatBalance } from '../utils/format';

const provider = new JsonRpcProvider(
  'https://mainnet.infura.io/v3/402f510cc8c749818b22a6ae85fc3468'
);

export async function getBalances(req: Request, res: Response) {
  const addresses = req.query.address;

  if (
    !addresses ||
    !Array.isArray(addresses) ||
    !addresses.every((address) => typeof address === 'string')
  ) {
    return res.status(400).json({ error: 'Invalid or missing address parameter' });
  }

  const balances: Record<string, string> = {};

  for (const address of addresses as string[]) {
    try {
      if (!isAddress(address)) {
        balances[address] = '0';
      } else {
        const balanceWei = await provider.getBalance(address);
        balances[address] = formatBalance(formatEther(balanceWei));
      }
    } catch (error) {
      balances[address] = '0';
    }
  }

  res.json(balances);
}
