import React from 'react';


  function Square(props) {
    render(){
      return(  <button className="square" onClick={()=>this.setState({value:'A'})}>{this.state.value}
        </button>
      );

    }


  }



export default Square;
