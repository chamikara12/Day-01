//JSON
//Key:Value

let student ={regNo:'2021ict29',name:'Chamikara',age:23};
console.log(student.name);

let students =[
    {regNo:'2021ict29',name:'Chamikara',age:23},
    {regNo:'2021ic77',name:'Nakichchi',age:35},
    {regNo:'2021ict45',name:'Goamaya',age:20}
];

console.log(students);
for(let i=0; i<students.length; i++){
    console.log(students[i].name);  