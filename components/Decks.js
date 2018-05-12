import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { AppLoading } from 'expo'
import {purple, white, black} from "../utils/colors";


// {/*<Text>{JSON.stringify(decks, null, 2)}</Text>*/}
// {/*<Text>{JSON.stringify(decks[key], null, 2)}</Text>*/}
// {/*<Text>{Object.keys(decks).map(key => JSON.stringify(decks[key], null, 2))}</Text>*/}

class Decks extends Component {
  state = {
    ready: false
  }

  componentDidMount() {
    this.setState(
      {
        ready: true,
      })
  }

  render() {
    const { navigation, decks } = this.props
    const { ready } = this.state

    if (!ready) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {Object.keys(decks).map(key => {
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
                  <Text>{deck.title}</Text>
                  <Text>{deck.questions.length}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )

    // return (
    //   <View style={styles.container}>
    //     <ScrollView>
    //
//           <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 1</Text>
    //         <Text>5</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 2</Text>
    //         <Text>4</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 3</Text>
    //         <Text>3</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 4</Text>
    //         <Text>3</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 5</Text>
    //         <Text>3</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 6</Text>
    //         <Text>3</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.deck}>
    //         <Text>Deck 7</Text>
    //         <Text>3</Text>
    //       </TouchableOpacity>
    //     </ScrollView>
    //   </View>
    // )
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
    borderWidth: 1,
    borderRadius: 4,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'center',
  }
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
  const { decks } = state
  return {
    decks : state
  }
}

export default connect(mapStateToProps, undefined)(Decks)
