import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globals';
import Routes from './routes';

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
