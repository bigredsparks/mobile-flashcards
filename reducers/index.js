import { ADD_DECK, ADD_CARD, INIT_DECKS } from '../actions'

// Sample data structure of store:
//
// const initialState = {
//   React: {
//     title: 'React',
//       questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//       questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment within which that function was declared.'
//       }
//     ]
//   }
// }

function decks (state = {}, action) {
  switch (action.type) {
    case INIT_DECKS:
      return action.decks

    case ADD_DECK:
      return {
        ...state,
        [action.deckName]: {
          title: action.deckName,
          questions: [],
        }
      }

    case ADD_CARD:
      return {
        ...state,
        [action.deckName]: {
          title: action.deckName,
          questions: [
            ...state[action.deckName].questions,
            action.card
          ],
        }
      }

    default:
      return state
  }
}

export default decks
