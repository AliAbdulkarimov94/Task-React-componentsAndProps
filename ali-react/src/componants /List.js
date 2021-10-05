import React from 'react'

function List(props) {

    const todoData =props.todo 
    
    return (
        <div className="todo">
           <h6>{todoData.name}</h6> 
           <p>{todoData.priority}</p>
           <p>{todoData.deadline}</p>
        </div>
    )
}

export default List
