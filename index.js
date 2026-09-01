// console.log("Hello, World!");

// function sum(a,b){
//     return Math.sqrt(a) + Math.sqrt(b);
// }
// console.log(sum(5, 10));

// const add = function(a,b){
//     return a+b;
// }
// console.log(add(5, 10));

// const sumnum=(a,b) => a+b;
// console.log(sumnum(5, 10));


// //IIFE=Immediately Invoked Function Expression
// (()=>{
//     console.log("IIFE");

// })();


// var a=10;
// let b=20;
// if(a<20){
//     var a=30;
//     console.log("value of a inside if block: "+a);

// }
// console.log("value of a outside if block: "+a);


// if(b<30){
//     let b=40;
//     console.log("value of b inside if block: "+b);


// }
// console.log("value of b outside if block: "+b);

// //callback function
// function msgWithSUm(clbk,msg){
//     const result=clbk(50,60);
//     console.log("Hii "+msg+" your result is "+result);
// }
// msgWithSUm(sum,"Sachin");



// function login(error,msg){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username==="admin" && password==="12345"){
//         clbk(null,"Login successful!");
//     }
//     else{
//         clbk("Invalid credentials",null);
//     }

// }

// loginHandler("admin","12345",login);    
// loginHandler("user","12345",login);


// console.log("One");
// setTimeout(()=>{console.log("Two")},1000)
// console.log("Three");
// console.log("Four");

/*function sum(a,b){
    let c=Math.sqrt(a);
    let d=Math.sqrt(b);

    return c + d;
}
const arg1= Number(process.argv[2]);
const arg2= Number(process.argv[3]);
const result = sum(arg1,arg2);
console.log(`The sum of the square roots: ${result}`);*/

  //IIFE (Immediately Invoked Function Expression)
 /* (() => {
    console.log("This is an IIFE function");
    })();

    var a = 23;
    if(a<40){
        var a = 40;
        console.log("value of a inside block"+a);
    }
    console.log("value of a outside block"+a);*/


    //callback function
    /*function sum(a,b){
        return a+b;
    }
    function msgWithSum(clbk,msg){
        const result = clbk(10,20);
        console.log("hiii, "+msg+" : "+result);
    }
    msgWithSum(sum,"the sum of two numbers is");*/


    /*function login(error,msg){
        if(error){
            console.log("Error : "+error);
        }else{
            console.log("Message: "+msg);
        }
    }
    function loginHandeler(username,password,clbk){
        if(username === "admin" && password === "admin"){
            clbk(null,"Login Successfull");
        }else{
            clbk("Invalid Credentials",null);
        }
    }
    loginHandeler("admine","admin",login);*/




   /* console.log("one");
    console.log("two");
    console.log("three");
    console.log("one");
    for(i=0;i<10000;i++){
        console.log("i="+i); 
    }
    //setTimeout(() => {console.log("two")}, 1000);
    console.log("three");*/
// 

// const root=document.getElementById('container');
// const button=document.getElementById('btn');
// const disp=document.getElementById('disp');

// async function fetchData(){
// const loader=document.getElementById('loader');

// try{
//     loader.innerHTML= `<div class="loader"></div>`;
// const serverData= await fetch('https://fakestoreapi.com/products');

// const jsonData= await serverData.json();
//             const jsonData1= await serverData.json();
//            //  console.log(jsonData[0].title);
//            disp.innerHTML='${jsonData[0].title}';
// }catch(e){
//     console.log("Error is"+e);
// }
// finally{
//     loader.innerHTML='';
// }

// }

// button.addEventListener('click',fetchData);


// let table= <table border=2px></>





const root =document.getElementById('container');
const button = document.getElementById('btn');
const disp = document.getElementById('disp');
const loader = document.getElementById('loader');
async function fetchdata(){

try{
    const serverdata = await fetch('https://fakestoreapi.com/products/');
    const jsondata = await serverdata.json();
    //console.log(jsondata[0].title);
    disp.innerHTML=`${jsondata[0].title}`;
    loader.innerHTML=`<h2 style='color:blue;'>Data fetched successfully</h2>`;
    let table=`<table border='1' style='border-collapse:collapse;'>
    ${jsondata.map((item)=>{
        return `<tr>
        <td><img src="${item.image}" alt="${item.title}" style="width: 100px; height: auto;"></td>
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        </tr>`;
    }).join('')}
    </table>`;
    disp.innerHTML=table;
    loader.innerHTML='';


}catch(err){
    console.log("Error: "+err);
}
finally{
loader.innerHTML='';
}

}
button.addEventListener('click',fetchdata);