import React, { Component} from 'react';

class Palidrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palidrome: ''
        };
    }
handleChange(val){
    this.setState({ userInput: val });
}

isPalidrome(userIput){
    var forwards = userInput;
    var backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    if (forwards === backwards) {
        this.setState({ palidrome: 'true' });
    } else {
        this.setState({ palidrome: 'false'});

    }

}

    render() {
        return (
            <div className="puzzleBox palindromePB">
            <h4> Palidrome</h4>
            <input className="inputLine" onChange ={(e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.isPalidrome(this.state.userInput) }> Check </button>
            <span className="resultsBox">Palidrome: { this.state.palidrome} </span>
           </div>
          
        )
    }
}

export default Palidrome;