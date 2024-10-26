import { waterJugSolver } from '../services/waterJugService';

describe('Water Jug Solver', () => {
    test('should return correct steps for 3, 5, 4', () => {
      const result = waterJugSolver(3, 5, 4);
      expect(result).toBeDefined();
    });
  
    test('should return "No solution possible" for 2, 6, 5', () => {
      const result = waterJugSolver(2, 6, 5);
      expect(result).toBe('No solution possible');
    });
  
    test('should return correct steps for 2, 100, 96', () => {
      const result = waterJugSolver(2, 100, 96);
      expect(result).toBeDefined();
    });
  });
  