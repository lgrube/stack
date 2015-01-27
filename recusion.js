//luke grube
//1/26/15
//recursion code
//recursively run through the stack
load("stack.js");

function factorial(n) {
	if (n == 0) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

function fact(n) {
	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

print(factorial(5));
print(fact(5));
