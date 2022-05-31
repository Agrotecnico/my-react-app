import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './Components/Tasks';

class App extends Component {

    start = {
        tasks: tasks
    }

    render() {
        return ( 
        <div>
            <Tasks tasks= {this.start.tasks}/>
        </div>
        );
    }
}

export default App;
