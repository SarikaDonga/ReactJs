import React from 'react'

const Arr_Obj_methods = () => {

    // spreading Array

    // 1.When you want to create a copy of an array to avoid mutating the original:
    const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray];  // [1, 2, 3]

    //  2.You can easily add elements to an array by spreading the original array:
    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5];  // [1, 2, 3, 4, 5]

    //3.  You can combine multiple arrays using the spread operator:
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const combinedArray = [...arr1, ...arr2];  // [1, 2, 3, 4]

    // Spreading Object

    //1. To create a shallow copy of an object:
    const originalObj = { name: 'abcd', age: 25 };
    const copiedObj = { ...originalObj };  

    //2. You can update properties of an object by spreading the original object and adding new or updated properties:
    const user = { name: 'abcd', age: 25 };
    const updatedUser = { ...user, age: 26 };  

    // 3.You can combine multiple objects into one:
    const userInfo = { name: 'abcd' };
    const userDetails = { age: 25, location: 'New York' };
    const mergedUser = { ...userInfo, ...userDetails };  


    return (
        <div>Arr_Obj_methods</div>
    )
}

export default Arr_Obj_methods