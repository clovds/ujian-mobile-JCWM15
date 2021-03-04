import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Main from './src/navigation/Main';
import reducer from './src/redux/reducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Main />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
