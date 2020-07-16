//Quetion 1
// var username;
// username=prompt("Enter any string : ");
// console.log("Hi",username);
//Quetion 2
var str1="    hi hello good morning       ";
var str2="Karteeki"
var concat=str1.concat(str2)
console.log("concated strings : ",concat)

c=str2.includes('teek')
console.log(c)

c2=str2.localeCompare(str1)
console.log(c2)

c3=str2.match('e')
console.log(c3)

c4=str2.repeat(4);
console.log(c4);

c5=str1.replace('hello','karteeki');
console.log(c5)

c6=str1.search("good")
console.log(c6)

c7=str1.slice(9,13)
console.log(c7)

c8=str1.substring(4,9)
console.log(c8)

c9=str1.trim();
console.log(c9)

arr=[1,2,57,75785,3,4,5,0,646]
a=arr.slice(2,4)
console.log(a)
a2=arr.sort()
console.log(a2)

//Quetion 3(optional quetion)
// var choice=confirm("Are you over 24?")
// if(choice==true)
// {
//     console.log("You can drink!!")
// }
// else
// {
//     console.log("You can not drink!!!")
// }