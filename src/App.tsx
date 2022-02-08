import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import * as sse from 'event-source-polyfill/src/eventsource';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const es = new sse.EventSourcePolyfill(
      'http://127.0.0.1:8112/wallet/event',
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInZlcmlmaWVkIjp0cnVlLCJpYXQiOjE2NDM3MDI3OTMsImV4cCI6MTY0NTU2Mjc5M30.ue0KSacV-7Oo8xCXqoe2OG3-uc1K_U5FEVvnGMsNTh0`,
        },
      }
    );

    es.onmessage = ({ data }: { data: any }) => {
      setMessage(JSON.stringify(data));
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        {message && <p>New message: {message}</p>}
      </header>
    </div>
  );
}

export default App;
