//dates
let mydate = new Date()

console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log( typeof  mydate)


let mycreatedDate= new Date (2025,0,23) //months start form 0

console.log(mycreatedDate.toDateString())

let mycreatedDate_time= new Date (2025,0,23,5,3)

let MMDDYY= new Date("01-14-2024")


let mytimesatamp = Date.now()  //gives in the milisecond
console.log(mytimesatamp) 

//in seconds

console.log(Math.floor(mytimesatamp/1000))


// taking data form Dates
let newDate= new Date()
console.log(newDate.getMonth())
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())

//locale String formats 

const formattedDate = newDate.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  });
  
  console.log(formattedDate); 