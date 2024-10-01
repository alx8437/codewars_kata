//Total amount of points
const points = (games) => {
    const getScore = (str, position) => {
        if (position === 'x') return Number(str.slice(0, 1))
        if (position === 'y') return Number(str.slice(2, 3))
    }


    let result = 0;

    for (let i = 0; i < games.length; i++) {
        const game = games[i]
        console.log(game)
        const x = getScore(game, 'x');
        const y = getScore(game, 'y');
        if (x > y) {
            result += 3
        } else if (x === y) {
            result += 1
        }
    }

    return result;
}


console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))