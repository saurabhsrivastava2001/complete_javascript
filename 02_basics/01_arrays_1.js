//arrays

const myArr= [0,1,2,3,4,5,6,7 , true , "saurabh", ["hello ", 1 , true]]

// console.log[myArr[8]]
// console.log[myArr[9]]

//array makes shallow copy -- properties share the same references


//another way to make arrays

const myarr2= new Array(1,24,5)


//array methods 
myarr2.push(6)
// myarr2.pop()

//myarr2.unshift(0)// insert the elements to the start and shifts the array elements to the next
//myarr2.shift() //  removes the first element 

console.log(myarr2)

// slice splics
console.log(myarr2.slice(1,2))
console.log(myarr2)
console.log(myarr2.splice(1,2))
console.log(myarr2)

// question answer 

console.log(myarr2.includes(9))
console.log(myarr2.indexOf(24))

// array to string 
 const newArr = myarr2.join() // bind the array and makes it t string








