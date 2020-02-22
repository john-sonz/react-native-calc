import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from './components/Screen';
import Operators from './components/Operators';
import Numbers from './components/Numbers';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: ''
        };
    }
    addToInput = (text) => {
        this.setState({ input: this.state.input + text })
    };
    evalInput = () => {
        try {
            let result = String(eval(this.state.input));
            if (result === "Infinity" || result === "-Infinity") throw TypeError("Zero division error");
            if (result.length > 13) result = result.slice(0, 15);
            this.setState({ output: result });

        } catch (error) {
            console.log(error);
            this.setState({ output: 'Błąd' })
        }
    }
    clearLastInput = () => {
        this.setState({ input: this.state.input.slice(0, -1) })
    }

    render() {
        return (
            <View style={styles.container}>
                <Screen input={this.state.input} output={this.state.output} />
                <View style={styles.buttons}>
                    <Numbers write={this.addToInput} equals={this.evalInput} />
                    <Operators write={this.addToInput} clear={this.clearLastInput} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
        flex: 6,
        alignSelf: 'stretch'
    }
});
