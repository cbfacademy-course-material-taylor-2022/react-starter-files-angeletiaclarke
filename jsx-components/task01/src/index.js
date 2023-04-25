import React from 'react';
import ReactDOM from 'react-dom/client';

const name = 'Angeletia';

function Profile(name){
    return <main id="content" role="main" className="base">
            <h1>{name}'s React Page</h1>
              <p>Here is my bio, i love to cook, camp on a hilltop in Dorset and create things</p>
            </main>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Profile(name));

