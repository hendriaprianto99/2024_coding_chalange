function points(games) {
    let hasil = 0;

    for (let i = 0; i < games.length; i++) {
        let [x, y] = games[i].split(":").map(Number);

        if(x < y) {
            hasil += 0;
        } else if (x > y) {
            hasil += 3
        } else {
            hasil += 1;
        }
    }
    return hasil;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));