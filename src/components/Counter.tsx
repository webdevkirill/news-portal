import React from 'react';
import classes from './Counter.module.scss';

export const Counter = (): React.ReactElement => {
  const [counter, setCounter] = React.useState(0)
  
  const increment = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <>
      <h1 className={classes.title}>{counter}</h1>
      <button onClick={increment}>inc</button>
    </>
  )
}
