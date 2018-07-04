import React, { Component} from 'react';

class EvenAndOdd extends Component {
    
    constructor () {
        super();
        this.state ={
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleChange (val){
        this.setState({userInput: val });
    }
    assigntEvenAndOdds(userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
        
        for (var i = 0; i < arr.length; i++ ){
        if ( arr[i] % 2 === 0) {
            evens.push( parseInt(arr[i], 10) );
        }else{
            odds.push (parseInt(arr[i],10) );
      }
    }

    this.setState({ evenArray: Evens , oddArray: Odds });
    
}
    render() {
        return (
           <div className="puzzleBox evenAndOddPB">
            <h4> Evens and Odds </h4>
            <input clasaName="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput) }}> seperate </button>
            <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray) }</span>
            <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray) } </span>

            </div>


        )
    }
}
export default EvenAndOdd;