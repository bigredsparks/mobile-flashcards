import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView  } from 'react-native'
import { white, purple } from '../utils/colors'
import * as actions from '../actions'

class NewCard extends Component {
  state = {
    question : '',
    answer: '',
  }

  // handler for question input
  handleQuestionInput = (text) => {
    this.setState({question:text})
  }

  // handler for answer input
  handleAnswerInput = (text) => {
    this.setState({answer:text})
  }

  // handler for adding new card
  onAddCard = () => {
    const { question, answer } = this.state
    const { navigation, addCard } = this.props

    // were both a question and answer provided?
    if (question && answer) {
      // yes, call add card action and navigate back
      addCard(navigation.state.params.deckName, { question, answer })
      navigation.goBack()
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'Enter Question'}
          onChangeText={this.handleQuestionInput}
        />
        <TextInput
          style={styles.input}
          placeholder={'Enter Answer'}
          onChangeText={this.handleAnswerInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.onAddCard()}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginLeft: 90,
    marginRight: 90,
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
    addCard: (deckName, card) => dispatch(actions.addCard(deckName, card)),
  }
}

export default connect(null, mapDispatchToProps)(NewCard)
