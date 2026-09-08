const container=document.getElementById('container');
console.log(container);
const root= ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'Welcome to React');
const h1=React.createElement('h1',{style:{color:'blue',backgroundColor:'yellow'}},'Hello React');
const img=React.createElement('img',{src:'https://imgs.search.brave.com/XGY-bLL8b0jBGVxe1Y0Lmp61P0Dex1B1vLz2edBJpqE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE4/NDQ2MjIzOS92ZWN0/b3IvM2Qtc3F1YXJl/LWJveC1sZXR0ZXIt/cy1kZXNpZ24tbW9u/b2dyYW0tY29sb3Jm/dWwtc3ludGgtd2F2/ZS1ncmFkaWVudC1j/b2xvcnMtYW5kLXRl/eHR1cmVzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz10Rzd1/S0EwaDVOM2l6QTM2/eGVnNzllTGJKaDF4/VVVkT25ab2FGTy1o/cUJBPQ',alt:'scenery',style:{width:'300px',height:'200px'}},null);
//root.render(h2); this will render only h2 element

//root.render([h2,h1]);

const div=React.createElement('div',{style:{color:'black',backgroundColor:'lightgray'}},[h2,h1,img]);
// root.render(div); // this will render both h2 and h1 elements inside a div

const h21=<h2>Hello World</h2>
