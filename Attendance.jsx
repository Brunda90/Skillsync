import React, { useState } from 'react';

const Attendance = () => {
  const [seen, setSeen] = useState(new Set());
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const input = document.getElementById('studentId');
    const id = input.value.trim();
    if (!id) {
      setMessage('Please enter a student ID.');
      return;
    }
    if (seen.has(id)) {
      setMessage(`ID ${id} has already been marked.`);
    } else {
      setSeen(new Set(seen).add(id));
      setMessage(`Student ${id} checked in.`);
    }
    input.value = '';
  };

  return (
    <div>
      <h1>Mark Attendance</h1>
      <input id="studentId" type="text" placeholder="Enter ID" />
      <button id="markBtn" onClick={handleSubmit}>Check In</button>
      <div id="status">{message}</div>
    </div>
  );
};

export default Attendance;
