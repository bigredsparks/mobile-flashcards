import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet  } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, purple } from '../utils/colors'

export default class NewDeck extends Component {
  render() {
    return (
      <View>
        <Text style={styles.question}>
          What is the title of your new deck?</Text>
        <TextInput style={styles.input} placeholder={'Deck Title'}/>
        <TouchableOpacity
          style={styles.button}>
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
  btnText: {
    color: white,
    alignItems: 'center',
  }
})
