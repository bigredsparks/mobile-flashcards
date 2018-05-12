import { saveDeckTitle } from '../utils/api'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDeck(deckName) {
  saveDeckTitle(deckName)
  return {
    type: ADD_DECK,
    deckName
  }
}

export function addCard(deckName, card) {
  //addCardToDeck(deckName)
  return {
    type: ADD_CARD,
    deckName,
    card,
  }
}
