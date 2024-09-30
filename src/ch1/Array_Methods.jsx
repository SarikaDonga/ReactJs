import React from 'react'

const Array_Methods = () => {

    //1. map(): Creates a new array by applying a function to every element of the array.
    const numbers = [1, 2, 3];
    const doubled = numbers.map(num => num * 2);

    // 2. filter(): Creates a new array with elements that pass the given condition.
    const even = numbers.filter(num => num % 2 === 0);

    // 3. find(): Returns the first element that satisfies the given condition.
    const users = [{ name: 'abcd' }, { name: 'mnop' }, { name: 'efgh' }];
    const user = users.find(u => u.name === 'mnop');

    // 4.forEach(): Executes a function once for each array element (does not return a new array).
    numbers.forEach(num => console.log(num));

    // 5.reduce(): Reduces the array to a single value by applying a function.
    const sum = numbers.reduce((sum, no) => sum + no, 0);

    // 6. some(): Checks if at least one element in the array passes the given condition.
    const hasEven = numbers.some(num => num % 2 === 0);

    // 7. every(): Checks if all elements in the array satisfy the given condition.
    const allEven = numbers.every(num => num % 2 === 0);

    //  8.concat(): Merges two or more arrays into one new array.
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = arr1.concat(arr2);

    //9.  slice(): Returns a portion of the array (shallow copy) without modifying the original array.
    const sliced = numbers.slice(1, 4);

    //10. splice(): Adds/removes elements from an array and modifies the original array.
    numbers.splice(1, 1); // Removes 1 element at index 1
    

    // 10. Array destructuring is useful when you want to assign multiple array elements to variables.
    const [one,two,three]=numbers
    console.log(one)
    console.log(two)
    console.log(three)


    return (
        <div> </div>
    )
}

export default Array_Methods