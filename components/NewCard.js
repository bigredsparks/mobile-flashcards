import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView  } from 'react-native'
import { white, purple } from '../utils/colors'
import { addCard } from '../actions'

class NewCard extends Component {
  state = {
    question : '',
    answer: '',
  }

  handleQuestionInput = (text) => {
    this.setState({question:text})
  }

  handleAnswerInput = (text) => {
    this.setState({answer:text})
  }

  onAddCard = () => {
//    alert(JSON.stringify(this.state, null, 2))
    alert(JSON.stringify(this.props, null, 2))
    const { question, answer } = this.state
    const { navigation, addCard } = this.props

    if (question && answer) {
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
    justifyContent: 'center',
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

export default connect(null, {addCard})(NewCard)
