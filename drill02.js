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