import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import {white, purple, black, red, blue} from '../utils/colors'
import {connect} from "react-redux";

class Quiz extends Component {
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
    this.setState({
      showAnswer : !this.state.showAnswer
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
    const { navigation, decks } = this.props
    const { deckName } = navigation.state.params
    const { cardIndex, showAnswer, correctCount } = this.state
    const questions = decks[deckName].questions
    const cardCount = questions.length

    if (cardCount === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.scoreTitleText}>
            No Cards in Deck
          </Text>
        </View>
      )
    }

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

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate(
              'Decks',
            )}
          >
            <Text style={[styles.btnText, { color: white}]}>Back to Decks</Text>
          </TouchableOpacity>

        </View>
      )
    }

    const { answer, question } = questions[cardIndex]

    return (
      <View style={styles.container}>
        <Text
          style={styles.progress}
        >
          Question {cardIndex + 1} of {cardCount}
        </Text>
        <Text style={styles.question}>
          {showAnswer ? answer : question}
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
  },
  question: {
    fontSize: 30,
    //fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    textAlign: 'center',
  },
  correctButton: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 2,
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
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButton: {
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    backgroundColor: black,
    borderColor: black,
    borderWidth: 2,
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
    fontSize: 20,
    //fontWeight: 'bold',
    margin: 5,
  },
})

function mapStateToProps(state) {
  return {
    decks : state
  }
}

export default connect(mapStateToProps, undefined)(Quiz)

