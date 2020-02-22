import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';


const numbers = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

const lastRow = [".", "0", "="];

export default class Numbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.numbers}>
                {numbers.map((row, i) => {
                    return (<View style={styles.row} key={i}>
                        {row.map((btn, j) => {
                            return <Button press={() => { this.props.write(btn) }} text={btn} key={j} textStyle={styles.text} buttonStyle={styles.buttonStyle} />
                        })}
                    </View>)
                })}
                <View style={styles.row}>
                    <Button press={() => { this.props.write(lastRow[0]) }} text={lastRow[0]} textStyle={styles.text} buttonStyle={styles.buttonStyle} />
                    <Button press={() => { this.props.write(lastRow[1]) }} text={lastRow[1]} textStyle={styles.text} buttonStyle={styles.buttonStyle} />
                    <Button press={this.props.equals} text={lastRow[2]} textStyle={styles.text} buttonStyle={styles.buttonStyle} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    numbers: {
        backgroundColor: '#434343',
        alignSelf: 'stretch',
        flexDirection: 'column',
        flex: 3,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    text: {
        color: 'white',
        fontSize: 48
    },
    buttonStyle: {
        backgroundColor: '#434343',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});