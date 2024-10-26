import { Router } from 'express';
import { solveWaterJug } from '../controllers/waterJugController';
import { check } from 'express-validator';

const router = Router();

/**
 * @swagger
 * /solve:
 *   post:
 *     summary: Resuelve el problema de los jarrones de agua.
 *     description: Devuelve los pasos necesarios para medir exactamente Z galones usando dos jarrones.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               x_capacity:
 *                 type: integer
 *                 description: Capacidad del primer jarrón.
 *                 example: 2
 *               y_capacity:
 *                 type: integer
 *                 description: Capacidad del segundo jarrón.
 *                 example: 10
 *               z_amount_wanted:
 *                 type: integer
 *                 description: Cantidad exacta de galones que se quiere medir.
 *                 example: 4
 *     responses:
 *       200:
 *         description: Devuelve la secuencia de pasos para resolver el problema.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 solution:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       step:
 *                         type: integer
 *                         description: Número del paso.
 *                       bucketX:
 *                         type: integer
 *                         description: Estado del jarrón X en ese paso.
 *                       bucketY:
 *                         type: integer
 *                         description: Estado del jarrón Y en ese paso.
 *                       action:
 *                         type: string
 *                         description: Acción realizada en ese paso.
 *       400:
 *         description: Error en la entrada o no hay solución posible.
 */
router.post(
    '/solve',
    [
        check('x_capacity').isInt({ gt: 0 }).withMessage('X capacity must be a positive integer'),
        check('y_capacity').isInt({ gt: 0 }).withMessage('Y capacity must be a positive integer'),
        check('z_amount_wanted').isInt({ gt: 0 }).withMessage('Z amount must be a positive integer')
    ],
    solveWaterJug
);

export default router;
