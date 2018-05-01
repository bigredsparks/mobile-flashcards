import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { purple } from './utils/colors'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'

function FlashcardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
},{
  navigationOptions: {
    header: null
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <FlashcardStatusBar backgroundColor={purple} barStyle='light-content'/>
        <Tabs />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
