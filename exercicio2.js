function fibonacciSequence(n) {
    let a = 0, b = 1;
    const sequence = [a, b];

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        sequence.push(next);
        a = b;
        b = next;
    }

    return sequence;
}

function seemfibonacci(num) {
    let a = 0; b = 1;

    while (b <= num) {
        if (b === num) {
            return true;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    return false;
}

// teste no próprio código
const numero = 15;
const sequencia = fibonacciSequence(numero);

console.log("Sequencia de Fibonacci até o ", numero, ":", sequencia);

if (seemfibonacci(numero)) {
    console.log(numero, " Este número : pertence à sequência de Fibonacci.");
} else {
    console.log(numero, " Este número : não pertence à sequência de Fibonacci")
}