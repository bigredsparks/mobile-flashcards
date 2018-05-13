import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { AppLoading } from 'expo'
import {purple, white, black, gray} from "../utils/colors";
import { deleteAllDecks, getDecks } from '../utils/api'
import * as actions from '../actions'

class Decks extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    //deleteAllDecks().then(
      getDecks().then(decks => {
        this.props.initializeDecks(decks)
      })
        .then(this.setState(
          {
            ready: true,
          }
      ))
  }

  render() {
    const { decks } = this.props
    const { ready } = this.state

    if (!ready) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {decks && Object.keys(decks).length > 0
            ? (Object.keys(decks).map(key => {
              const deck = decks[key]
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.deck}
                  onPress={() => this.props.navigation.navigate(
                    'DeckView',
                    { deckName: key }
                  )}
                >
                  <View>
                    <Text style={styles.nameText}>{deck.title}</Text>
                    <Text style={styles.countText}>{deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}</Text>
                  </View>
                </TouchableOpacity>
                )}))
            : (<Text>No Cards</Text>)
          }
        </ScrollView>
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
  deck : {
    borderColor: black,
    borderWidth: 2,
    borderRadius: 4,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
  },
  nameText: {
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
  },
  countText: {
    fontSize: 20,
    color: gray,
    marginBottom: 5,
    textAlign: 'center',
  },

  // question: {
  //   fontSize: 30,
  //   fontWeight: 'bold',
  //   marginTop: 20,
  //   marginLeft: 60,
  //   marginRight: 60,
  //   textAlign: 'center',
  // },
  // input: {
  //   backgroundColor: white,
  //   borderColor: purple,
  //   borderWidth: 1,
  //   borderRadius: 4,
  //   marginLeft: 20,
  //   marginRight: 20,
  //   marginTop: 20,
  //   marginBottom: 20,
  //   paddingLeft: 5,
  //   paddingRight: 5,
  //   paddingBottom: 5,
  // },
  // button: {
  //   marginLeft: 90,
  //   marginRight: 90,
  //   backgroundColor: purple,
  //   padding: 10,
  //   borderRadius: 4,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // btnText: {
  //   color: white,
  //   alignItems: 'center',
  // }
})

function mapStateToProps(state) {
  return {
    decks : state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initializeDecks: (data) => dispatch(actions.initializeDecks(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
