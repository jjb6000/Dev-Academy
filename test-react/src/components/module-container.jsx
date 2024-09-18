import React, { Component } from 'react';
import './module-container.css';
import Card from './card';

class ModuleContainer extends Component {
    state = {  } 
    render() { 
        return <div className='module-container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>;
    }
}
 
export default ModuleContainer;