function createMyObject(){
    let myobject = {foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello:function(){ console.log('hello')}
    }
    return myobject;
}


function objectUpdater(obj) {
    // reference obj
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
    // create key name
    // add the value
    return obj;
}

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function(){
          return this.firstName + ' ' + this.lastName;
      },
    };
    return person;
  }



////////////////////////Tests////////////////////////////////

// console.log(createMyObject());
//console.log(objectUpdater(createMyObject()));
console.log(personMaker().fullName());