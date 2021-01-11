import React from 'react'

function Chore(props) {
  const { strikeChore, choreCompleted, chore: { task, id, completed } } = props;

  const handleClick = () => {
    strikeChore(id);
  }

  return (
    <div onClick={handleClick}
    className={`chore ${completed? "strike":""}`}>
      <h3>{task}</h3>
    </div>
  )
}

export default Chore
