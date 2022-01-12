/**
 * @format
 */
import React from 'react';

import { store, persister } from '@store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './src/Root';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
