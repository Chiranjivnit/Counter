import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Buttonview from './Buttonview';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleDrecement = () => {
        if (this.state.count >= 1) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    render() {
        return (
            <View>
                
                <Buttonview
                    count={this.state.count}
                    handleIncrement={this.handleIncrement}
                    handleDrecement={this.handleDrecement}
                />
            </View>
        )
    }

}
export default Counter;