import { AsyncStorage } from 'react-native'

const FLASHCARD_STORAGE_KEY = 'mobile-flashcard'

// Format of data stored in AsyncStorage
// {
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

export function deleteAllDecks() {
  return AsyncStorage.removeItem(FLASHCARD_STORAGE_KEY)
}

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then((results) => (JSON.parse(results)))
}

export function getDeck (id) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[id]
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title] : {
        title: title,
        questions: []
      },
  }))
}

export function addCardToDeck (card, title) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title].questions.push(card)
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
    })
}
