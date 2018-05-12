import React, { Component } from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import {white, black, gray} from "../utils/colors";

class DeckView extends Component {
  render() {
    const { deckName } = this.props

    alert(JSON.stringify(this.props))
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>{deckName}</Text>
        <Text style={styles.countText}>? cards</Text>
        <TouchableOpacity
          style={styles.addButton}
        >
          <Text style={[styles.btnText, { color: black}]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.startButton}
        >
          <Text style={[styles.btnText, { color: white}]}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
function mapStateToProps (state, {navigation}) {
  const { deckName } = navigation.state.params

  return {
    deckName
  }
}


export default connect(mapStateToProps)(DeckView)

const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: white,
    borderColor: black,
    borderWidth: 2,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  startButton: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: black,
    borderWidth: 2,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameText: {
    fontSize: 40,
//    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 30,
  },
  countText: {
    fontSize: 30,
    color: gray,
    marginBottom: 100,
  },
  btnText: {
    alignItems: 'center',
  }
})