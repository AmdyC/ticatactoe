import React, { useState } from 'react';
import './TicTacToe.css'; 

const TicTacToe = () => {
    const [board, setBoard] = useState([
        null, null, null, 
        null, null, null, 
        null, null, null]);
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return; 

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);

        const result = checkWinner(newBoard);
        if (result) {
            setWinner(result);
        } else if (newBoard.every(square => square)) {
            setWinner('Empate');
        }
    };
function checkWinner(newBoard){
    let allEqual= true;
    let Winner;
        for (let i = 0; i < newBoard[0].length ; i++){
            Winner= newBoard[0][i];
            for (let j = 1; j < newBoard.length ; j++){
                if (newBoard[j][i] !== Winner){
                    allEqual = false;
                    break;
                }
            }
        }

        for (let i = 0; i < newBoard.length ; i++){
            Winner = newBoard[row][0];
            for (let j = 0; j < newBoard[i].length ; j++){
                if (newBoard[i][j] !== Winner){
                    allEqual = false;
                    break;
                }
            }
        }

        for (let i = 0; i < newBoard.length ; i++){
            Winner= newBoard[0][0];
            if (newBoard[i][i] !== Winner){
                allEqual = false;
                break;
            }
        }
        for (let i = 0; i < newBoard.length ; i++){
            Winner=newBoard[0][newBoard.length - 1]
            if (newBoard[i][newBoard.length - 1 - i] !== Winner){
                allEqual = false;
            }
        }
        if(allEqual && Winner){
            return Winner
        }
        return null
    };
    const status = winner ? `Ganador: ${winner}` : `Siguiente jugador: ${isXNext ? 'X' : 'O'}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board">
                {count.map((value, index) => (
                    <div 
                        key={index} 
                        className="square" 
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicTacToe;