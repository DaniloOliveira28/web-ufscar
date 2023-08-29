import Square from '../Square';

import './Board.css'
type BoardProps = {
    squares: ('X' | 'O' | null)[];
    onClick: (squareId:number) => void;
}
const Board = (props: BoardProps) => {

    const renderSquare = (i:number) => (
        <Square
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />
      );

    return (
        <div className='board'>
            <section className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </section>
            <section className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </section>
            <section className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </section>
        </div>
    )
}

export default Board;