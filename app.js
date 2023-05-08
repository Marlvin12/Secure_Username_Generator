import React, { useState } from 'react';

export function App(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [secureLoginName, setSecureLoginName] = useState('');

  const generateSecureLoginName = () => {
    const set1 = firstName.slice(0, 3);
    const set2 = lastName.slice(0, 3);
    const set3 = idNumber.slice(-4);
    setSecureLoginName(set1 + set2 + set3);
  };

  return (
    <div className="App">
      <h1>**WELCOME TO JACKSON STATE UNIVERSITY LOGIN NAME GENERATOR**</h1>
      <div>
        <label htmlFor="firstName">Enter your first name: </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Enter your last name: </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="idNumber">Enter your ID number: </label>
        <input
          type="text"
          id="idNumber"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
      </div>
      <button onClick={generateSecureLoginName}>Generate Secure Login Name</button>
      {secureLoginName && (
        <div>
          <p>Generated secure login name: {secureLoginName}</p>
        </div>
      )}
    </div>
  );
}

export default App;