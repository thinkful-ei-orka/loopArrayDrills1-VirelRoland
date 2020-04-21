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

function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
}





////////////////////////Tests////////////////////////////////

// console.log(createMyObject());
const updatedObj = objectUpdater(createMyObject());
console.log(keyDeleter(updatedObj));