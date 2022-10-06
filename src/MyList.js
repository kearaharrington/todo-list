import React, { useState } from 'react';
import ListItem from './ListItem';
import './App.css';


function MyList(props) {
    const [tasks, setTasks] = useState(props.items)
    const [newItem, setNewItem] = useState('');

    const clearList = () => {
        console.log('clearing list...');
        setTasks([]);
    }

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const addItem = (e) => {
        e.preventDefault();
        let newList = tasks;
        newList.push(newItem);
        setTasks(newList);
        setNewItem('');
    }

    const renderAllToDos = () => { 
        let allToDos = tasks.map((toDo, idx) => {
            return <ListItem key={idx} task={toDo} />;
        });
        return allToDos;
    }

    return (
        <div>
            <h1>things I should stop procrastinating:</h1>
            <form onSubmit={addItem}>
                <input type="text" value={newItem} onChange={handleChange}/>
                <button type="submit">Add To List</button>
            </form>
            <ul>
                {renderAllToDos()}
            </ul>
            <button onClick={clearList}>Clear List</button>
        </div>
    );
}

export default MyList;