import React from 'react'

interface CousrseGoalProps{
    title: string,
    description: string
}

const CourseGoal = ({title, description}:CousrseGoalProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  )
}

export default CourseGoal
