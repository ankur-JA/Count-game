import { Card, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: "200px"
    }}>
      <Card style={{
        width: "600px",
        height: "200px",
        padding: "30px"
      }}>
          <Typography variant='h5' style={{ textAlign: 'center'}}>Welcome to My count Game</Typography>
          <br />
          <ButtonC count={count} setCount={setCount}></ButtonC>
          <Count count={count} setCount={setCount}></Count>
      </Card>
    </div>
  )
}


function ButtonC({count, setCount}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <Upcount count={count} setCount={setCount}/>
        <Downcount count={count} setCount={setCount}/>
    </div>
  )
}

function Upcount({count, setCount}) {
  return (
    <div>
      <Button variant="contained"
      onClick={() => {
        setCount(count + 1);
      }}>up-count</Button>
    </div>
  )
}

function Downcount({count, setCount}) {
  return (
    <div>
      <Button variant="contained" onClick={() => {
        setCount(count - 1);
      }}>down-count</Button>
    </div>
  )
}

function Count({count, setCount}) {
  return(
    <div>
      <Typography style={{textAlign: 'center', marginTop: "30px"}}>
        {count}
      </Typography>
    </div>
  )
}

export default App
