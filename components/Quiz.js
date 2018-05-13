import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {white, purple, black, red, blue} from '../utils/colors'

export default class Quiz extends Component {
  state = {
    cardIndex : 0,
    showAnswer : false,
    correctCount: 0,
  }

  onCorrect = () => {
    const { cardIndex, correctCount } = this.state

    this.setState({
      cardIndex : cardIndex + 1,
      correctCount : correctCount + 1
    })
  }

  onIncorrect = () => {
    const { cardIndex } = this.state

    this.setState({
      cardIndex : cardIndex + 1
    })
  }

  onShowAnswer = () => {
    const { cardIndex, showAnswer } = this.state
    this.setState({
      showAnswer : !showAnswer
    })
  }

  onRestart = () => {
    this.setState({
      cardIndex: 0,
      showAnswer : false,
      correctCount: 0,
    })

  }

  render() {
    const { cardIndex, showAnswer, correctCount } = this.state
    const cardCount = 3

    if (cardIndex >= cardCount) {
      const score = 100 * correctCount / cardCount
      return (
        <View style={styles.container}>
          <Text style={styles.scoreTitleText}>
            Score
          </Text>
          <Text style={styles.scoreText}>
            {Number(score).toFixed(2)} %
          </Text>
          <Text
          >
            {correctCount} out of {cardCount} correct
          </Text>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={() => this.onRestart()}
          >
            <Text style={[styles.btnText, { color: white}]}>Restart</Text>
          </TouchableOpacity>

        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text
          style={styles.progress}
        >
          Question {cardIndex + 1} of {cardCount}
        </Text>
        <Text style={styles.question}>
          {showAnswer ? 'Yes' : 'Does React Native work with Android'}
        </Text>

        <TouchableOpacity
          style={styles.answerBtn}
          onPress={() => this.onShowAnswer()}
        >
          <Text style={styles.answerBtnText}>
            {showAnswer ? 'Question' : 'Answer'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.correctButton}
          onPress={() => this.onCorrect()}
        >
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.incorrectButton}
          onPress={() => this.onIncorrect()}
        >
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  question: {
    fontSize: 30,
    //fontWeight: 'bold',
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
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

  correctButton: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 2,
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  incorrectButton: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    backgroundColor: red,
    borderColor: red,
    borderWidth: 2,
    // paddingLeft: 50,
    // paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  restartButton: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    backgroundColor: blue,
    borderColor: blue,
    borderWidth: 2,
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },


  btnText: {
    color: white,
    alignItems: 'center',
    fontSize: 20,
  },

  answerBtnText: {
    color: red,
    alignItems: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },

  scoreText: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  scoreTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  answerBtn: {
    marginTop: 10,
    marginBottom: 50,
  },

  progress: {
    fontSize: 15,
    margin: 5,
  }
})
