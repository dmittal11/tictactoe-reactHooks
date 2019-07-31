import React, { useState } from 'react';
import hasSubArray from './utils/utils';
import './App.css';
import Operation from './components/Operation';


// State 

// State: 

// 	- Board 
// 	- Player 
// 	- Winner
	
// Functions:

// 	handleClick:
// 					- Check that the current value within the board is null
// 					- Know the current positions of either X or 0
// 					- Check the current positions against the winning positions 
// 					- According to the results the Winner can either be x or 0
					
// 	createBoard:    - Use the map function to create the necessary divisions 




// Render

// Child Component - Status 

// 1) Pass the right props to Status 

// 2) Call the function that allows the boxes to be rendered to the screen 

// 3) The reset button is disabled once the game has started and there is no winner

// 4) The reset button is enabled once the game is complete or if there is a winner 


// Refactor the code 



const App = () => {

  const[board, setBoard] = useState(Array(9).fill())
  const[player, setPlayer] = useState(null)


  const data = {
    board,
    setBoard,
    player,
    setPlayer
  }

  return (

    <div className="container">
      <h1>Tic Tac Toe App</h1>
      
       <Operation setPlayer={(player) => setPlayer(player)} getPlayer={player} />

      <div className="board">

      {/* Board code goes here   */}
      
      {renderBoxes(data)}
      

      </div>

      {/* Button code goes here  */}
    </div>
  );
}

  const handleClick = (index, data) => {
    const {board, setBoard, player, setPlayer} = data // destructuring

    let winner = false 

    if(!board[index]){
      board[index] = player
    

    const playerPosition = [];
    for(let i=0; i<board.length; i++){
        if(board[i] === player){
          playerPosition.push(i)
        }
    }

    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] 
    ]

    for(let j = 0; j<winningLines.length; j++){
      const [a, b, c] = winningLines[j]

      if(hasSubArray(playerPosition, [a, b, c])){
        if(window.confirm(player + ' Has Won!! \n Would You like to reset the game')){
          winner = true
          break;
        }
      }
    }
  }

    if(winner){
      setBoard(Array(9).fill())
      setPlayer(null)
    } else{
      setBoard(board)
      setPlayer(player === 'x' ? '0' : 'x')
    }
}

  const renderBoxes = (data) =>{
    return(
      data.board.map((box, index) => (
      <div className="box" key={index} onClick={() => handleClick(index, data)}>
        {box}
      </div>
    ))
    )
  }




export default App;
