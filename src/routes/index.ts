import { Router } from 'express';
import { getBalances } from '../controllers/balance';

const router: Router = Router();

router.get('/balances', getBalances);

export default router;
