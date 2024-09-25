import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#fff',
    };
  }

  handleColorChange = (newColor, colorName) => {
    this.setState({ backgroundColor: newColor });
    Alert.alert( `${colorName} button clicked!`);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        {}
        <Text style={styles.headerText}>Choose color</Text>

        {}
        <ColorButton title="GREEN" color="green" onPress={this.handleColorChange} />
        <ColorButton title="BLUE" color="blue" onPress={this.handleColorChange} />
        <ColorButton title="BROWN" color="brown" onPress={this.handleColorChange} />
        <ColorButton title="YELLOW" color="yellow" onPress={this.handleColorChange} />
        <ColorButton title="RED" color="red" onPress={this.handleColorChange} />
        <ColorButton title="BLACK" color="black" onPress={this.handleColorChange} />
      </View>
    );
  }
}

// Button component to handle color changes
const ColorButton = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => onPress(color, title)}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#003366',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 25,
    borderRadius: 5,
    width: '95%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
