// primeira forma de fazer
function fatorial1(n) {
    let fat = 1
    for(let c = n; c > 1; c--)
        fat *= c
    return fat
}

console.log(fatorial1(5))

// segunda forma de fazer 
function fatorial2(n) {
if (n == 1) {
    return  1
} else {
    return n * fatorial2(n-1)
    }
}

console.log(fatorial2(5))