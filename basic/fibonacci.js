let ant, suc, fibonacci, arrayFibonacciSequence, index;

ant = 0;
suc = 1;

index = 1;

arrayFibonacciSequence = [ant, suc];

while(index < 14) {

	fibonacci = ant + suc;
	ant = suc;
	suc = fibonacci;

	arrayFibonacciSequence.push(suc);

	index++;
}

console.log(arrayFibonacciSequence);