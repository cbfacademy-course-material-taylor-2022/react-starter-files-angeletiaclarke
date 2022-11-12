import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';


      //Replace the string below with the JSX Profile component
      function App() {
        return (
            <Profile name="Angeletia" bio="A creative."/>
        );
      }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

