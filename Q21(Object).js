"use strict";
let object;
let students = [
    {
        name: "Kashish",
        rollno: 1009,
        age: 19,
        likes: {
            sports: "Football",
            subjects: "Maths"
        }
    },
    {
        name: "Hassan",
        rollno: 1109,
        age: 18,
        likes: {
            sports: "Throwball",
            subjects: "Science"
        }
    },
    {
        name: "Eman",
        rollno: 1039,
        age: 20,
        likes: {
            sports: "Hockey",
            subjects: "Computer"
        }
    }
];
console.log("Student Details:\n");
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name},Roll no:${students[i].rollno} who is ${students[i].age} likes ${students[i].likes.sports} in sports and has ${students[i].likes.subjects} as favourite subject`);
}
