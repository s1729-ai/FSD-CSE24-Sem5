const container=document.getElementById('container');
console.log(container);
const root= ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'Welcome to React');
root.render(h2);