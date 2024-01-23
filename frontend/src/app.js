import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>Hello from the Front-End!</h1>
      <p>Message from the API: {message}</p>
    </div>
  );
}

export default App;
