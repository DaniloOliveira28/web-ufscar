type PanelProps = {
    winner?: 'X' | 'O' | null
}
const Panel = (props:PanelProps) => {
    console.log('xxxx_winner', props.winner)
    return (
        <div> 
        {props.winner == 'X' || props.winner == 'O' ?
            (<div>Vencedor: {props.winner}</div> ) :
            (<div>Jogo sendo jogado!!</div>)
        }
    </div>
    )
}

export default Panel;