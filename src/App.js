import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>BUILD OUTLINE</h3>
      <ul>
        <li>Splash Screen
            <ul>
              <li>Create Account</li>
              <li>Sign In</li>
            </ul>
        </li>
        <li>My Garage
          <ul>
            <li>Add New Vehicle</li>
            <li>My Vehicle
              <ul>
                <li>Photos</li>
                <li>Specs</li>
                <li>Maintenance</li>
                <li>Parts</li>
                <li>Car Settings</li>
                <li>* More (Glovebox)</li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  );
}

export default App;
