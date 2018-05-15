import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { AppLoading } from 'expo'
import { white, black, gray} from '../utils/colors'
import { deleteAllDecks, getDecks } from '../utils/api'
import * as actions from '../actions'

class Decks extends Component {
  state = {
    ready: false,
    bounceValue: new Animated.Value(1)
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

  // handler for when deck is selected
  onGotoDeck = (key) => {
    const { bounceValue } = this.state

    // start animation sequence to shrink deck list
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 200, toValue: .5}),
      Animated.spring(bounceValue, { toValue: 1, friction: 4})
    ]).start()

    // navigate to selected deck
    this.props.navigation.navigate(
      'DeckView',
      { deckName: key }
    )
  }

  render() {
    const { decks } = this.props
    const { ready, bounceValue } = this.state

    if (!ready) {
      return <AppLoading />
    }

    return (
      <Animated.View style={[styles.container, {transform: [{scale: bounceValue}]}]}>
        <ScrollView>
          {decks && Object.keys(decks).length > 0
            ? (Object.keys(decks).map(key => {
              const deck = decks[key]
              return (
                <TouchableOpacity
                  key={key}
                  style={styles.deck}
                  onPress={() => this.onGotoDeck(key)}
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
      </Animated.View>
    )

  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deck : {
    borderColor: black,
    borderWidth: 2,
    borderRadius: 4,
    backgroundColor: white,
    padding: 40,
    marginBottom: 10,
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
    decks : state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    initializeDecks: (decks) => dispatch(actions.initializeDecks(decks)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decks)
