import React, { useState } from 'react';
import Icon from './Icon';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Board.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#dadde3',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const BoardCell = new Array(9).fill('empty');

const Board = () => {

  //Check Turn
  const [isCircleTurn, setCircleTurn] = useState(false);
  const [drawMessage,setDrawMessage]=useState("");
  const [winMessage,setWinMessage]=useState("");
  const [validMove,setValidMove]=useState(true);

  //Reload Game

  const Reload = () => {
    setCircleTurn(false);
    BoardCell.fill('empty',0,9);
    setWinMessage("");
    setDrawMessage("");
  }

  // Draw Logic

  const checkIsDraw = () => {
    const isChance = BoardCell.includes('empty');
    if(!isChance)
    {
      setDrawMessage("Game Draw");
    }
  }

  //Win Login

  const checkIsWin = () => {
    if(BoardCell[0]!=='empty' && BoardCell[0]===BoardCell[1] && BoardCell[1]===BoardCell[2])
    {
      setWinMessage(`${BoardCell[0]} Won`);
    }
    else if(BoardCell[0]!=='empty' && BoardCell[0]===BoardCell[4] && BoardCell[4]===BoardCell[8])
    {
      setWinMessage(`${BoardCell[0]} Won`);
    }
    else if(BoardCell[0]!=='empty' && BoardCell[0]===BoardCell[3] && BoardCell[3]===BoardCell[6])
    {
      setWinMessage(`${BoardCell[0]} Won`);
    }
    else if(BoardCell[3]!=='empty' && BoardCell[3]===BoardCell[4] && BoardCell[4]===BoardCell[5])
    {
      setWinMessage(`${BoardCell[3]} Won`);
    }
    else if(BoardCell[6]!=='empty' && BoardCell[6]===BoardCell[7] && BoardCell[7]===BoardCell[8])
    {
      setWinMessage(`${BoardCell[6]} Won`);
    }
    else if(BoardCell[6]!=='empty' && BoardCell[6]===BoardCell[4] && BoardCell[4]===BoardCell[2])
    {
      setWinMessage(`${BoardCell[6]} Won`);
    }
    else if(BoardCell[1]!=='empty' && BoardCell[1]===BoardCell[4] && BoardCell[4]===BoardCell[7])
    {
      setWinMessage(`${BoardCell[1]} Won`);
    }
    else if(BoardCell[2]!=='empty' && BoardCell[2]===BoardCell[5] && BoardCell[5]===BoardCell[8])
    {
      setWinMessage(`${BoardCell[2]} Won`);
    }
  }

  const changeIcon = (index) => {

    if(winMessage!=="" || drawMessage!=="")
    {
      return;
    }

    //if Empty change the 

    if(BoardCell[index]==='empty')
    {
      BoardCell[index]= isCircleTurn?'Circle':'Cross';
      isCircleTurn?setCircleTurn(false):setCircleTurn(true);
      setValidMove(true);
    }
    else
    {
      setValidMove(false);
    }

    
    // Call Draw Logic
    checkIsDraw();

    // if Not Draw then Call Win Logic
    checkIsWin();
    
  }

  let message=<div>{isCircleTurn?'Circle':'Cross'} Turn</div>;
  if(validMove===false)
  {
    message=<div>Not a Valid Move</div>;
  }
  if(winMessage!=="")
  {
    message=<div>{winMessage}</div>
    
  }
  else if(drawMessage!=="")
  {
    message=<div>{drawMessage}</div>;
  }

  return (
    <Box className='Board'>
      <Grid container spacing={1} className="Board-Cont">
        {BoardCell.map((item, index) => (
          <Grid item xs={3.5} className="Grid-item">
            <Item className='each-item' onClick={()=>{changeIcon(index)}}>
              <Icon item={item} />
            </Item>
          </Grid>
        ))}
      </Grid>
      
      <div className='Turn-Decision' style={{backgroundColor:(winMessage!==""||drawMessage!=="")?"#21c851":'#0de9d3'}}>{message}</div>
      <div onClick={Reload} className="Reload-Game">{(winMessage!==""||drawMessage!==""?'New Game':'Reload the Game')}</div>
      
    </Box>
  );
}

export default Board;