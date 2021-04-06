import React, { useState } from 'react';
import Board from './Board';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { calculateWinner } from '../helpers';


const styles = {
  margin: '0px auto',
  textAlign: 'left'
};


const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };


  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0)
  };


  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : 'Go to start';
      return (
        <li key={move} className="li">
          <button
            className="btn btn-outline-danger"
            onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })
  );


  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={5}>
          <Board className="board" squares={history[stepNumber]} onClick={handleClick} />
          <p>{winner ? <Alert variant="danger">"{winner}" IS THE WINNER!!! <hr />Press "Go to start" and make a move to play again.</Alert> : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
          {/* <p><strong>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</strong></p> */}
        </Col>
        <Col>
          <div style={styles}>
            {renderMoves()}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Game;
