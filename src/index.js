import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'mobx-react';
import MovieStore from './components/MovieStore/MovieStore';


const Root = (
    <Provider MovieStore={MovieStore}>
        <App/>
    </Provider>
)


ReactDOM.render(Root, document.querySelector("#root"));
