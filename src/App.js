import React from 'react';
import './App.scss';
import {Provider} from 'react-redux'
import store from "./redux/store";
import HomeContainer from "./components/main/Home/HomeContainer";

const App = () => {
    return (
        <Provider store={store}>
                <div className="App">
                    <HomeContainer/>
                </div>
        </Provider>
    );
};

export default App;
