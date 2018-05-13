import { saveDeckTitle, addCardToDeck } from '../utils/api'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const INIT_DECKS = 'INIT_DECKS'

export function initializeDecks(decks) {
  debugger
  return {
    type: INIT_DECKS,
    decks,
  }
}

export function addDeck(deckName) {
  saveDeckTitle(deckName)
  return {
    type: ADD_DECK,
    deckName,
  }
}

export function addCard(deckName, card) {
  addCardToDeck(card, deckName)
  return {
    type: ADD_CARD,
    deckName,
    card,
  }
}
