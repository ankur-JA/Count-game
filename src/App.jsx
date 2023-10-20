import { Card, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { useState } from 'react'
import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil';

function App() {

  return (
    <RecoilRoot>
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
            <ButtonC />
            <Count />
        </Card>
      </div>
    </RecoilRoot>
  )
}


function ButtonC() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
        <Upcount />
        <Downcount />
    </div>
  )
}

function Upcount() {
  const setCount = useSetRecoilState(stateCount);
  return (
    <div>
      <Button variant="contained"
      onClick={() => {
        setCount(existingcount => existingcount + 1);
      }}>up-count</Button>
    </div>
  )
}

function Downcount() {
  const setCount = useSetRecoilState(stateCount);
  return (
    <div>
      <Button variant="contained" onClick={() => {
        setCount(existingcount => existingcount - 1);
      }}>down-count</Button>
    </div>
  )
}

function Count() {
  const count = useRecoilValue(stateCount);
  return(
      <div>
        <Typography style={{textAlign: 'center', marginTop: "30px"}}>
          {count}
        </Typography>
      </div>
    )
  }

export default App

const stateCount = atom({
  key: 'stateCount',
  default: 0,
});
