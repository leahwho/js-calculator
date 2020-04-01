const exampleAdditionInput = {
  num1: 4,
  num2: 5,
  operation: 'add',
};
const exampleAdditionInput2 = {
  num1: 4,
  num2: 5,
  operation: '+',
};
const exampleSubtractionInput = {
  num1: 10,
  num2: 4,
  operation: 'subtract',
};
const exampleSubtractionInput2 = {
  num1: 10,
  num2: 4,
  operation: '-',
};
const exampleMultiplicationInput = {
  num1: 10,
  num2: 2,
  operation: 'multiply',
};
const exampleMultiplicationInput2 = {
  num1: 10,
  num2: 2,
  operation: '*',
};
const exampleDivisionInput = {
  num1: 30,
  num2: 15,
  operation: 'divide',
};
const exampleDivisionInput2 = {
  num1: 30,
  num2: 15,
  operation: '/',
};
const exampleZeroDivisionInput = {
  num1: 30,
  num2: 0,
  operation: 'divide',
}
const exampleBadFirstNum = {
  num1: 'nope',
  num2: 15,
  operation: 'divide',
};
const exampleBadSecondNum = {
  num1: 30,
  num2: 'yikes',
  operation: '/',
};
const exampleBadOperator = {
  num1: 30,
  num2: 15,
  operation: 'fart',
};
const exampleNullFirstNum = {
  num1: null,
  num2: 15,
  operation: '/',
};
const exampleNullSecondNum = {
  num1: null,
  num2: 15,
  operation: '/',
};
const exampleNullOperator = {
  num1: 30,
  num2: 15,
  operation: null,
};



const divideNums = function(num1, num2) {
  if (num2 === 0) {
    console.log('Oops! You can\'t divide by zero, silly.');
    return;
  }
  return num1 / num2;
};


const validInput = function(input) {
  if ((typeof input.num1 === 'object') || (typeof input.num2 === 'object') || (typeof input.operation === 'object')) {
    console.log('Oops! Looks like you forgot to enter something... Please check your input and run this program again!');
    return false;
  };

  if (typeof input.num1 !== 'number') {
    console.log(`You entered: "${input.num1}". This is not a valid number. Please check your input and enter an integer or decimal for this number!`);
    return false;
  };

  if (typeof input.num2 !== 'number') {
    console.log(`You entered: "${input.num2}". This is not a valid number. Please check your input and enter an integer or decimal for this number!`);
    return false;
  };

  const operations = ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', '/']

  if (!operations.includes(input.operation)) {
    console.log(`You entered "${input.operation}".  This is not a valid operator.  Please check your input and enter 'add', 'subtract', 'multiply', or 'divide' as your operator.`);
    return false;
  };

  return true;
};


const calculateMath = function(input) {
  if (validInput(input)) {
    switch(input.operation) {
      case 'add':
      case '+':
        const answerAdd = input.num1  + input.num2;
        console.log('We\'re doing some addition!');
        return console.log(`Here is your answer: ${input.num1} + ${input.num2} = ${answerAdd}`);
      case 'subtract':
      case '-':
        const answerSub = input.num1 - input.num2;
        console.log('Subtraction here we come.');
        return console.log(`Here is your answer: ${input.num1} - ${input.num2} = ${answerSub}` );
      case 'multiply':
      case '*':
        const answerMult = input.num1 * input.num2;
        console.log('Multiplication station!');
        return console.log(`Here is your answer: ${input.num1} * ${input.num2} = ${answerMult}` );
      case 'divide':
      case '/':
        const answerDiv = divideNums(input.num1, input.num2);
        if (answerDiv) {
          console.log('Division\'s like fission!');
          return console.log(`Here is your answer: ${input.num1} / ${input.num2} = ${answerDiv}`);
        };
    };
  };
};

console.log(calculateMath(exampleAdditionInput));
console.log(calculateMath(exampleAdditionInput2));
console.log(calculateMath(exampleSubtractionInput));
console.log(calculateMath(exampleSubtractionInput2));
console.log(calculateMath(exampleMultiplicationInput));
console.log(calculateMath(exampleMultiplicationInput2));
console.log(calculateMath(exampleDivisionInput));
console.log(calculateMath(exampleDivisionInput2));
console.log(calculateMath(exampleZeroDivisionInput));
console.log(calculateMath(exampleBadFirstNum));
console.log(calculateMath(exampleBadSecondNum));
console.log(calculateMath(exampleBadOperator));
console.log(calculateMath(exampleNullFirstNum));
console.log(calculateMath(exampleNullSecondNum));
console.log(calculateMath(exampleNullOperator));