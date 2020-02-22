import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={this.props.buttonStyle} onPress={this.props.press}>
                <View style={this.props.buttonStyle}>
                    <Text style={this.props.textStyle}> {this.props.text} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

