import React from 'react'

import Chore from './Chore';

function ChoreList(props) {
  const { chores, filterCompletedChores, strikeChore } = props;

  const handleClick = () => {
    filterCompletedChores();
  }
  return (
    <div className='choreList'>
        {chores.map(chore => {
          return <Chore key={chore.id}
          chore={chore}
          filterCompletedChores={filterCompletedChores}
          strikeChore={strikeChore}
          />
        })}
        <button onClick={handleClick}>Clear Completed Chores</button>
    </div>
  )
}

export default ChoreList
