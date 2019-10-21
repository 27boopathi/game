import React form 'react';
import Square from './components/Square';
class Board extends React.Component{
constructor(props){
  super(props);
  this.state={
    squares=Array(9).fill(null);
  };
}
handClick(i){
  const squares={this.state.squares.slice();
  squares[i]="A";
this.setState({squares:squares});
}
  renderSqare(i){
    return <Square value={this.state.squares[i]}/>;
  }
  render()
  const status='next player: A';
  return(<div>
  <div className="status">{status}</div>
<div className="board-row">
{this.renderSqare(0)}
  {this.renderSqare(1)}
    {this.renderSqare(2)}
    </div>
    <div className="board-row">
    {this.renderSqare(3)}
      {this.renderSqare(4)}
        {this.renderSqare(5)}
        </div>
        <div className="board-row">
        {this.renderSqare(6)}
          {this.renderSqare(7)}
            {this.renderSqare(8)}
            </div>
            </div>
);
}
export default Board;
