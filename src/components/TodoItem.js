import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem(props) {
   const getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: props.todo.completed ? 
           'line-through' : 'none'
       }
    }
        
    const { id, title } = props.todo;
    return (
        <div style={getStyle()}>
            <p>
            <input type="checkbox" onChange={props.markComplete.bind(props, id)} /> {' '}
            { title }
            <button onClick={props.delTodo.bind(props, id)} style={btnStyle}>X</button>
            </p>

        </div>
    )
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
