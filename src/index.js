import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

//Import Component
import Home from './component/home';
import Artist from './component/artist';
//import 'normalize.css';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/artist/:artistid" component={Artist}/>
            </div>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

