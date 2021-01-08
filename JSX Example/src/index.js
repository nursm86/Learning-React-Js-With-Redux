import React from 'react';
import ReactDOM from 'react-dom';

const App = ()=>{
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  return (
    <div>
      <label htmlFor="name">{labelText}</label>
      <input className="Input" type="text" id="name"></input>
      <button className="btn btn-success" style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>
    </div>
  );
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
