// Code your solutions in this file

function writeCards(names, reason) {
    const rAy = []
    for (let i = 0; i < names.length; i++) {
        rAy.push(`Thank you, ${names[i]}, for the wonderful ${reason} gift!`);
    }
    return rAy
}

function countDown(number) {
    let i = 0
    while ( number > 0 ) {
        console.log ( number );
        number -= 1;
    }
    console.log( number )
}