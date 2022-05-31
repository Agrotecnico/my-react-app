import React, {Component} from 'react';


class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: 'none'
        } 
    }

    render() {

        const {task} = this.props;

        return ( 
            <p style= {this.StyleCompleted()}>
                {task.title} - 
                {task.descripcion} - 
                {task.done} - 
                {task.id}
                <input type="checkbox"/>
                <button style={btnDelete}>x</button>
            </p>
        )
    }
}

const btnDelete = {
    fontSize: '18px',
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    cursor: 'pointer'

}

export default Task;