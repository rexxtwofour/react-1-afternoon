
import React, { Component} from 'react';

import EvenAndOdd from '..Topics/EvenAndOdd'
import FilterObject from '..Topics/FilterObject'
import FilterString from '..Topics/FilterString'
import Palidrome from '../Topics/Palidrome/'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render() {
        <p>Hello world</p>
        return (
            <div>
                <EvenAndOdd/>
                <FilterObject/>
                <FilterString/>
                <Palidrome/>
                <Sum/>
            </div>
        )
    }
}

export default TopicBrowser;
