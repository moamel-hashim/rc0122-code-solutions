function ExampleConstructor() {

}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

const exampleConstructorFunction = new ExampleConstructor();
console.log('the value of example constructor function', exampleConstructorFunction);

const checkInstance = exampleConstructorFunction instanceof ExampleConstructor;

console.log('the value of instanceof ', checkInstance);
