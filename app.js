// const heading =   React.createElement('h1',{id:'heading', class:'heading'}, 'hi react');
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(heading);
//const parent =   React.createElement('div',{id:'parent', class:'parent'}, React.createElement('div',{id:'child'},React.createElement('h1',{id:'heading'},'i am heading')));

const parent = React.createElement('div',
 {id:'parent'},[ React.createElement('div',
  {id:'child'}, 
  [React.createElement('h1',{id:'heading'}, "i am h1 tag"),
  React.createElement('h2',{id:'heading2'}, "i am h2 tag")]),
  React.createElement('div',
  {id:'child2'}, 
  [React.createElement('h1',{id:'heading'}, "i am h1 tag"),
  React.createElement('h2',{id:'heading2'}, "i am h2 tag")])]);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);