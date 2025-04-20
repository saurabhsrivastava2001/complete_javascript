const marvel_heroes= [" thor ","iron", "spireman"]
const dc_heroes= [" charls","flash", "superman"]
// pusingthe second array in the array
//marvel_heroes.push(dc_heroes)

//accessing flash
// console.log(marvel_heroes[3][1])

// concat method combine 2 or more arrays and return a new array

const both= marvel_heroes.concat(dc_heroes) 
console.log(both)
//combining both arrays--------spread methods
const all_new_heroes =[...marvel_heroes,...dc_heroes]

console.log(all_new_heroes)

//flat array  -- return all the elements fo all sybarrays of the array

const another= [1,2,3,[4,5,6,[8,23,55,[2],33,[332]]]]
const real_another= another.flat(Infinity)
console.log(real_another)

// changing the another data formats to array
//1- asking -
console.log(Array.isArray("saurabh"))
console.log(Array.from("saurabh"))

let score1= 100
let score2= 200
let score3= 300

//converting the variables to arrays

const arr_from_vars=Array.of(score1, score2, score3)
console.log(arr_from_vars)

