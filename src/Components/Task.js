import React, {Component} from 'react';


class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '40px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: 'none',
            padding: "0 20px"
        } 
    }

    render() {

        const {task} = this.props;

        return ( 
            <p style= {this.StyleCompleted()}>
{/*                 {task.title} - 
                {task.descripcion} - 
                {task.done} -  */}
                
                <button style={btnDelete}>x</button>
                {task.id}
                {/* <input type="checkbox"/> */}
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
    cursor: 'pointer',
    margin: "0 20px"

}

export default Task;