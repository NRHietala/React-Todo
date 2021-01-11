import React from 'react'

import Chore from './Chore';

function ChoreList(props) {
  const { chores, choreCompleted, strikeChore } = props;

  const handleClick = () => {
    choreCompleted();
  }
  return (
    <div className='choreList'>
        {chores.map(chore => {
          return <Chore key={chore.id}
          chore={chore}
          choreCompleted={choreCompleted}
          strikeChore={strikeChore}
          />
        })}
        <button onClick={handleClick}>Clear Completed Chores</button>
    </div>
  )
}

export default ChoreList
