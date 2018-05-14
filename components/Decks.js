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
    // uncomment to delete all decks
    //deleteAllDecks().then(
      getDecks().then(decks => {
        this.props.initializeDecks(decks)
      })
        .then(this.setState(
          {
            ready: true,
          }
      ))
    //)
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
})

function mapStateToProps(state) {
  return {
    decks : state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initializeDecks: (decks) => dispatch(actions.initializeDecks(decks)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
