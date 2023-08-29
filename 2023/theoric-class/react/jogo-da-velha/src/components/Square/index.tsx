
import './Square.css'

type SquareProps = {
    value?: 'X' | 'O' | null;
    onClick: () => void;
}

const Square = (props: SquareProps) => {
  return (
    <div>
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
