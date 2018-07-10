import React from 'react';
import App from '../App'
import store from '../store'
import {Provider} from 'react-redux'
import { hot } from 'react-hot-loader'

function Root() {
    return (
        <Provider store = {store()}>
            <App/>
        </Provider>
    )
}

export default hot(module)(Root)