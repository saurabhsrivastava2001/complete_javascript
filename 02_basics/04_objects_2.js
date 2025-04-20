const appuser = new Object()  // singleton
 // non singleton

appuser.id= "1234"
appuser.name = "saurabh"
appuser.isloggedin = true

// console.log( appuser)

// passing object in the obbject
const appuser2 = {
    email: "saurbb@gmail.com",
    info : appuser,
    name : {
        full_name:{
            first_name :" saurabh",
            last_name : " sriv",
        }
    }
}
console.log(appuser2.name.full_name.first_name)
// combining the objects

const obj1= {
    1:"a",
    2:"b",
}
const obj2= {
    3:"a",
    4:"b",
}
const obj3= Object.assign({},obj1,obj2)
const obj4= {...obj1,...obj2}

// getting the keys , values of the objects

console.log(Object.keys(appuser));
console.log(Object.values(appuser));


// checking if the object has the property ot not ?
console.log("does our class has the property name?"+appuser.hasOwnProperty('name'));
