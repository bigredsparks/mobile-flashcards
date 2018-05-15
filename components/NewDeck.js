import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native'
import { white, purple } from '../utils/colors'
import * as actions from '../actions'

class NewDeck extends Component {
  state = {
    deckName: ''
  }

  handleInput = (text) => {
    this.setState({deckName:text})
  }

  onAddDeck = () => {
    const { navigation, addDeck } = this.props
    const { deckName } = this.state

    if (deckName) {
      addDeck(deckName)
      this.setState({deckName:''})
      navigation.navigate(
        'DeckView',
        {deckName}
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>
          What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder={'Deck Title'}
          onChangeText={this.handleInput}
          value={this.state.deckName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onAddDeck()}
          >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  question: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    textAlign: 'center',
  },
  input: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    width: 250
  },
  button: {
    width: 200,
    backgroundColor: purple,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: white,
    alignItems: 'center',
  }
})

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (data) => dispatch(actions.addDeck(data)),
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
