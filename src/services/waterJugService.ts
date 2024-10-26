import NodeCache from 'node-cache';

const solutionCache = new NodeCache({ stdTTL: 3600 });

interface Step {
    step: number;
    bucketX: number;
    bucketY: number;
    action: string;
}

export const waterJugSolver = (xCapacity: number, yCapacity: number, zAmountWanted: number): Step[] | string => {
    const cacheKey = `${xCapacity}-${yCapacity}-${zAmountWanted}`;
    const cachedResult = solutionCache.get<Step[] | string>(cacheKey);

    if (cachedResult) {
        console.log(`Cache hit for key: ${cacheKey}`);
        return cachedResult; 
    }

    if (zAmountWanted > xCapacity && zAmountWanted > yCapacity) {
        return "No solution possible";
    }

    let visited = new Set<string>();
    let queue: { x: number, y: number, steps: Step[] }[] = [];
    queue.push({ x: 0, y: 0, steps: [] });

    while (queue.length > 0) {
        const { x, y, steps } = queue.shift()!;

        if (x === zAmountWanted || y === zAmountWanted) {
            const result = steps.concat({
                step: steps.length + 1,
                bucketX: x,
                bucketY: y,
                action: 'Solved'
            });

            solutionCache.set(cacheKey, result);
            console.log(`Cache set for key: ${cacheKey}`);
            return result;
        }

        if (visited.has(`${x},${y}`)) continue;
        visited.add(`${x},${y}`);

        const possibleStates = [
            { x: xCapacity, y, action: 'Fill bucket X' },
            { x, y: yCapacity, action: 'Fill bucket Y' },
            { x: 0, y, action: 'Empty bucket X' },
            { x, y: 0, action: 'Empty bucket Y' },
            { x: Math.max(x - (yCapacity - y), 0), y: Math.min(yCapacity, y + x), action: 'Transfer X to Y' },
            { x: Math.min(xCapacity, x + y), y: Math.max(y - (xCapacity - x), 0), action: 'Transfer Y to X' }
        ];

        for (let state of possibleStates) {
            queue.push({
                x: state.x,
                y: state.y,
                steps: steps.concat({
                    step: steps.length + 1,
                    bucketX: state.x,
                    bucketY: state.y,
                    action: state.action
                })
            });
        }
    }

    const noSolution = "No solution possible";
    solutionCache.set(cacheKey, noSolution);
    console.log(`Cache set for key (no solution): ${cacheKey}`);
    return noSolution;
};
