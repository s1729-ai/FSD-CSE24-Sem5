const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(root)
const h2=document.createElement('h2');
const img=document.createElement('img');
const div=document.createElement('div');

function showData(){
    try{
    h2.innerText='Welcome to DOM';
    h2.style.color='red';
    h2.style.backgroundColor='cyan';
    img.src='';
    img.setAttribute("height","200");
    img.setAttribute("width","100");


    root.appendChild(h2);
    root.appendChild(img);
    root.appendChild(div);
    }

    catch{
    console.log("Error is"+e);
    }
    finally{
        body.removeChild(h2);
        body.removeChild(img);
        body.removeChild(div);
    }
}
button.addEventListener('click',showData);