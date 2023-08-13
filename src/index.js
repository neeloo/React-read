import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import Timer from './React Hook/Timer';
import Counter from './React Hook/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Timer/> */}
    <Counter/>
    

  </React.StrictMode>
  
);


