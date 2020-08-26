// Code your solutions in this file
function writeCards(namesArray, event) {
    let arraycards = []
    for ( let i = 0; i < namesArray.length; i++) {
        arraycards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
      
    }
    return arraycards
}


function countDown(number) {
    let i = 0;
    while (i < number+1) {
    console.log(i++);
}
}

