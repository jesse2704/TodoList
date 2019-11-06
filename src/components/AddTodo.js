import React, { useState } from 'react';

export default function AddTodo(props) {
    const [state, setState] = useState({
       title: ''
     }) 

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(state.title);
        setState({ title: '' });
    }
    const onChange = (e) => setState({ title: e.target.value });
 
    return (
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
            <input
             text="text" 
             name="title" 
             style={{ flex: '10', padding: '5px' }}
             placeholder="Add Todo"
             value={state.title}
             onChange={onChange}
            />
            <input
             type="submit" 
             value="Submit" 
             className="btn"
             style={{flex: '1'}}
            />
        </form>
    )
}


