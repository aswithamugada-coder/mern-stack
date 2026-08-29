// console.log("Looping and functions page");
// let a=1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

// for (let i=1;i<=100;i++){
//     console.log(i);
// }

// let obj={
//     name:"balu",
//     roll:30,
//     branch:"csc",
// }
// for (const i in obj) {
//     const element = obj[i];
//     console.log(i);
//     console.log(obj[i]);
//     console.log(i,obj);    
// }

// for (const i of "hello") {
//     console.log(i);
    
// }
// let i=1;
// while (i<50){
//     console.log("iloveapple");
//     i++;
// }
// let j=1;
// do{
//   console.log("vijay devarakonda");
//     j++;
// }
// while(j<25){
// }

let a=29;
let b=30;
let max;
max=(a>b)?a:b;
console.log(max);

let x="ashu"
switch(x){
    case "Ashu":
        console.log("this is ashu");
        break;
        case "arjundas":
            console.log("this is arjundas");
            break;
            default:
                console.log("i dont want arjundas");
}
    for(let i=8; i<=100; i+=8){
    console.log(i);
   }

   function osm(name){
console.log("hey "+name+ " your voice osm1");
console.log("hey "+name+ " your voice osm2");
console.log("hey "+name+ " your voice osm3");
console.log("hey "+name+ " your voice osm4");
}
osm("arjundas");
// console.log("hey arjundas,your voice osm1");
// console.log("hey arjundas,your voice osm2");
// console.log("hey arjundas,your voice osm3");
// console.log("hey arjundas,your voice osm4");
function sum(a,b){
    console.log(a+b);
}
total=sum(10,20)
console.log(total);

function sum(a,b,c=3){
    console.log(a+b+c);
}
sum(1,2,3)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}
func1()