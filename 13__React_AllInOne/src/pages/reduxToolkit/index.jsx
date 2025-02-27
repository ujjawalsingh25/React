import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from '../../store/store';
import ReduxToolkit from './redux-toolkit';

function ReduxIndex() {
  return (
    <Provider store={createStore} >
        <ReduxToolkit />
    </Provider>
  )
}

export default ReduxIndex;