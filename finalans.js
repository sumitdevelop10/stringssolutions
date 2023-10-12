let name ="messi LEO"

console.log(name.length)

console.log(name.toLowerCase("leo"))

let name = "patanwal sumit"
console.log(name.length)

console.log(name.toUpperCase("patanwal"))






let str4 ="please give rs 1000"
let amount = str4.slice("please give rs ".length)
console.log(amount)





let str4 ="please give rs 1000"
let amount = Number.parseInt(str4.slice(15))
console.log(amount)
console.log(typeof amount)






//problem 5
let friend = "deepika"
friend[3]= "r"
console.log(friend)//friend is not changed , because string is immutable