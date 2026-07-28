console.log("Hello, World!");

function sum(a,b){
    return Math.sqrt(a) + Math.sqrt(b);
}
console.log(sum(5, 10));

const add = function(a,b){
    return a+b;
}
console.log(add(5, 10));

const sumnum=(a,b) => a+b;
console.log(sumnum(5, 10));


//IIFE=Immediately Invoked Function Expression
(()=>{
    console.log("IIFE");

})();


var a=10;
let b=20;
if(a<20){
    var a=30;
    console.log("value of a inside if block: "+a);

}
console.log("value of a outside if block: "+a);


if(b<30){
    let b=40;
    console.log("value of b inside if block: "+b);


}
console.log("value of b outside if block: "+b);

//callback function
function msgWithSUm(clbk,msg){
    const result=clbk(50,60);
    console.log("Hii "+msg+" your result is "+result);
}
msgWithSUm(sum,"Sachin");



function login(error,msg){
    if(error){
        console.log("Error: "+error);
    }
    else{
        console.log(msg);
    }
}

function loginHandler(username,password,clbk){
    if(username==="admin" && password==="12345"){
        clbk(null,"Login successful!");
    }
    else{
        clbk("Invalid credentials",null);
    }

}

loginHandler("admin","12345",login);    
loginHandler("user","12345",login);