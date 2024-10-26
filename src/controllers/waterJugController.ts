import { Request, Response } from 'express';
import { waterJugSolver } from '../services/waterJugService';
import { validationResult } from 'express-validator';

export const solveWaterJug = (req: Request, res: Response): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    const { x_capacity, y_capacity, z_amount_wanted } = req.body;

    const result = waterJugSolver(Number(x_capacity), Number(y_capacity), Number(z_amount_wanted));

    if (typeof result === 'string') {
        res.status(400).json({ error: result });
        return;
    }

    res.status(200).json({ solution: result });
};
