"use strict";
// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data
// structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
let people = {
    friends: [],
};
let friends1 = {
    firstName: "Muhammad",
    lastName: "Hamza",
    id: "1",
};
let friends2 = {
    firstName: "Muhammad",
    lastName: "Haroon",
    id: "2",
};
let friends3 = {
    firstName: "Muhammad",
    lastName: "Taha",
    id: "3",
};
people.friends.push(friends1, friends2, friends3);
console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 1, "am");
scrambledArray.splice(2, 2, "a", "student");
scrambledArray.splice(4, 1, "of");
let result1 = scrambledArray.join(" ");
console.log(result1);
let inventory = [];
let product1 = {
    name: "T-shirt",
    model: 2020,
    cost: 1000,
    quantity: 1,
};
let product2 = {
    name: "Jeans",
    model: 2021,
    cost: 2000,
    quantity: 2,
};
let product3 = {
    name: "Sneakers",
    model: 2022,
    cost: 1500,
    quantity: 5,
};
inventory.push(product1, product2, product3);
console.log("Cost Of Third Product", inventory[2].cost);
let product4 = {
    name: "Watch",
    model: 2024,
    cost: 1700,
    quantity: 10,
};
inventory.push(product4);
console.log("Quantity of Product4 ", inventory[3].quantity);
console.log("Model of Product1", inventory[0].model);
console.log("Name of Product2", inventory[1].name);
let students = [
    {
        name: "HAMZA",
        isSenior: true,
        hasCompletedAss: true,
    },
    {
        name: "AWAIS",
        isSenior: false,
        hasCompletedAss: true,
    },
    {
        name: "HAROON",
        isSenior: true,
        hasCompletedAss: true,
    },
    {
        name: "ANEES",
        isSenior: false,
        hasCompletedAss: false,
    },
];
// console.log(students);
let findSenStudents = (students) => {
    return students.filter((student) => student.isSenior && student.hasCompletedAss === true);
};
console.log(findSenStudents(students));
let deletStudents = (students) => {
    return students.filter((student) => student.hasCompletedAss === false);
};
console.log(deletStudents(students));
