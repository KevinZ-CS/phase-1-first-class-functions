function cb() {
    console.log(Pass)
}
function receivesAFunction(cb) {
    return (cb());
}

function returnsANamedFunction () {
    return receivesAFunction
}

function returnsAnAnonymousFunction () {
    return () => console.log(done)
}