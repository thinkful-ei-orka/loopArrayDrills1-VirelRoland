function makeStudentsReport(data) {
    //for in loop
    //take variable .name
    let list = [];
    for(let student of data){
        list.push(`${student.name}: ${student.grade}`);
    }
    return list;
  }

  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

console.log(makeStudentsReport(testData));


function enrollInSummerSchool(students) {
  for (let i = 0; i < students.length; i++) {
    students[i].status = "Enrolled in Summer School";
  //array of objects
}
return students;
}

const studentData = [ { name: 'Tim', status: 'Current student', course: 'Biology', },
{ name: 'Sue', status: 'Withdrawn', course: 'Mathematics', },
{ name: 'Liz', status: 'On leave', course: 'Computer science', }, ];

function findById(items,idNum){
    return  items.find(function(x){
        if(x.id===idNum){
            return x;
        }
    })
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];
//console.log(enrollInSummerSchool(studentData));

console.log(findById(data, 2));