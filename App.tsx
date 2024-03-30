/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import Main from "./app/index";
import store from "./app/redux/store"

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
}

export default App;
