import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.row}>
                        <Text style={[styles.text, { fontSize: 52 }]}>{this.props.input}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={[styles.text, { fontSize: 42 }]}>{this.props.output}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#47FFCC',
        flex: 3,
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    text: {
        color: 'black',
        textAlign: 'right'
    },
    row: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});