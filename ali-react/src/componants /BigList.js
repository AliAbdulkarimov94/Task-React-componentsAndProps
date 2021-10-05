import React from 'react'
import List from './List'
import todosData from '../Todos'
    

function BigList() {
  
  
  const TheList = todosData.map(todo => <List todo={todo}/>)
  
    return (
        <div className="Thelist">
            {TheList}
        </div>
    )
}

export default BigList
