//declare
// literals
//constructor -- makes singleton onjects(only diff)


//object literal --
let mysymb = Symbol("key1")
const jsUser ={ 
    name: "Saurabh",
    age :24,
    location : "punjab",
    email: "saurabh@gmail.com",
    isLoggedin: true,
    last5login:["mon", "tue", 'wed'],
    "efficiency":"medium",
    //using symbol
    [mysymb]: mysymb
}
//accessing 
// console.log(jsUser.email)// 1st way we cant access the efficiency by this method
// console.log(jsUser["isLoggedin"]) // second way best way 
// console.log(jsUser["efficiency"])
// console.log(typeof jsUser[mysymb])

// modify
jsUser.email= "srisaurabh2001@gamil.com"
console.log(jsUser.email)

//lock the value -- cant be changes
// Object.freeze(jsUser) 
// now modifying wont give the error but it will not propogate


//adding function 
jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting)//-- undefined

jsUser.greeting2 = function(){
    console.log(`hello user, ${this.name}`);
}


console.log(jsUser.greeting())
console.log(jsUser.greeting2())









//object singleton 
