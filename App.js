import React from 'react';
import { Provider } from 'react-redux';
import store from './src/root/store';
import QuestionsScreen from './src/screens/questions/QuestionsScreen';

const App = () => {
  return (
    <Provider store={store}>
      <QuestionsScreen />
    </Provider>
  );
};

export default App;
