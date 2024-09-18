import React, { Component } from 'react';
import Navbar from './components/navbar';
import ModuleContainer from './components/module-container';

class App extends Component {
    state = {  } 
    render() { 
        return <>
            <Navbar/>
            <ModuleContainer/>
        </>;
    }
}
 
export default App;