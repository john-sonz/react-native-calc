import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const operators = ["/", "*", "-", "+"];

export default class Operators extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.operators}>
                <Button press={this.props.clear} text="C" buttonStyle={styles.buttonStyle} textStyle={styles.text} />
                {operators.map((op, i) => {
                    return <Button press={() => this.props.write(op)} key={i} text={op} buttonStyle={styles.buttonStyle} textStyle={styles.text} />
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    operators: {
        backgroundColor: '#636363',
        alignSelf: 'stretch',
        flexDirection: 'column',
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 48
    },
    buttonStyle: {
        backgroundColor: '#636363',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
