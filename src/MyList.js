import React from 'react';
import ListItem from './ListItem';

const toDos = ['buy ice cream', 'wash the floors', 'fold the laundry', 'other things']
let allToDos = toDos.map((toDo, idx) => {
    return <ListItem key={idx} task={toDo} />;
})

function MyList() {
    return (
        <div>
            <h1>things I should stop procrastinating:</h1>
            <ul>
                {allToDos}
            </ul>
        </div>
    );
}

export default MyList;