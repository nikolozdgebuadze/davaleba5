//Task 1

/*
დაწერეთ ფუნქცია რომელიც შეამოწმებს გადაცემული ტექსტი არის თუ არა პალინდრომი . 
პალინდრომი არის სიტყვა რომელიც შებრუნებულ მდგომარეობაშიც იგივეა . მაგ. madam - მარცხნიდანაც და მარჯვნიდანაც ერთი და იგივეა(შებრუნებულიც და ჩვეულებრივადაც) .
*/
function palindrom(text) {
let reversed = "";
 for(let i = text.length - 1; i >= 0; i--){
    reversed += text[i]
 }
     return text === reversed ? true : false

}
console.log(palindrom("madam"))
console.log(palindrom("xvicha"))
console.log(palindrom("racecar"))
//Task 2

/*
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს პირველ არაგამეორებადი ქარაქტერი/სიმბოლოს. 
მაგალითად გვაქვს string 'bcskbrk' -> c - პირველი არაგამეორებადი ქარაქტერი არის 'c'
'cbcbdde' -> 'e'
'worsdorw' -> 's' 
'worsdorws'-> 'd'


*/
function stringg (txt) {
    for (let i = 0; i < txt.length;i++ ){
        if (txt.indexOf(txt[i]) === txt.lastIndexOf(txt[i])){
            return txt[i]
        }
    }
}  
  console.log(stringg('cbcbdde'))
  console.log(stringg('worsdorw'))
  console.log(stringg('worsdorws'))





/*
Task 3 : 
დაწერეთ ფუნქცია რომელიც გადაცემულ ტექსტის camelCase ში კონვერტაციას გააკეთებს
camelize("sad midis Matarebeli") -> "sadMidisMatarebeli"

*/

function upper (textt) {
return textt.charAt(0).toUpperCase() + textt.substring(1)
}




function camel(textt){
    let ram = textt.split(" ")
    return ram.reduce ((acc,cur,index)=>{
        if (index === 0){
            acc = acc + cur;
        }else acc = acc + upper(cur)
        return acc
    },"");

}
 console.log(camel("sad midis Matarebeli"))

//console.log(Number("A") - Number("B"));

/*
Task 4: 
დაწერეთ ფუნქცია რომელიც დაგვიბრუნებს რიცხვს სწორი სუფიქსით , როგორიცაა 1st, 2nd, 3rd or 4th და ა.შ

მაგ . normilize(121) -> '121st' 
normilize(124) -> '124th' 
normilize(33) -> '33rd' 
    

*/


function normilize(n){
    let lastnum = n % 10
     if(lastnum === 1){
        return "st"
     }else if (lastnum === 2){
        return "nd" 
     }else if (lastnum === 3){
        return "rd"
     }else{
        return "th"
     }
}
 console.log(normilize(121))
 console.log(normilize(124))
 console.log(normilize(33))





//Task 5

/*
დაწერეთ ფუნქცია რომელსაც გადაეცემა მასივი და ეს ფუნქცია დაგვიბრუნებს
ამ მასივში ყველაზე ხშირად გამოერებად ელემენტს და გამეორების რაოდენობას
მაგალითად
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
პროგრამამ უნდა დაგვიბრუნოს 'a - 5'
უმჯობესია გამოიყენოთ reduce მეთოდი

*/
arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
/*
Task 6 : 
დაწერეთ ფუნქცია რომელიც იღებს ორ მასივს და უნდა დაგვიბრუნოს 
ამ ორი მასივის დამერჯილი მასივი , გაერთიანებული , არადუბლირებული მნიშვნელობებით .
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];

შედეგი უნდა იყოს : [1,2,3,30]

*/
let array1 = [1, 2, 3];
let array2 = [2, 30, 1];


let sheerteb =array1.concat(array2)

let set = new Set()

for (let i = 0;i < sheerteb.length;i++){
    set.add(sheerteb[i])
}
console.log(set)

/*
Task 7 : 
ფუნქციამ უნდა დააბრუნოს მასივი ისე როგორც კომენტარშია ნაჩვენები . 
გამოიყენეთ map
*/




function readyToPutInTheDOM(arr) {
  return arr.map((el)=>{
    return `<h1>${el.name}</h1><h2>${el.age}</h2>`
  })
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);

["<h1>Angelina Jolie</h1><h2>80</h2>",
"<h1>Eric Jones</h1><h2>2</h2>",
"<h1>Paris Hilton</h1><h2>5</h2>",
"<h1>Kayne West</h1><h2>16</h2>",
"<h1>Bob Ziroll</h1><h2>100</h2>"]

/* Task 8 */

/* 
  გვაქვს ფუნქცია sumOfDifferences(arr) , რომელიც იღებს მასივს . 
  პროგრამამ მასივი უნდა დაალაგოს კლებადობით და შემდეგ უნდა დაგვითვალოს
  მეზობელი ელემენტების სხვაობების ჯამი . 
  მაგ : [2, 1, 10]  -->  9 , რაც ნიშნავს დავალაგებდით [10,2,1] კლებადად
  შემდეგ  (10-2) + (2-1) = 8 + 1 = 9

  სორტირების ფუნქცია დაწეროთ თქვენით ან გამოიყენოთ Array.sort() მეთოდი რომელიც
  პარამეტრად იღებს compareFn ფუნქციას , შედარების ქოლბექს .



  */