#!/usr/bin/env node
import game from '../index.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  return Math.floor(min + Math.random() * (max - min))
}

const getAnswer = (num) => {
  if (num < 2) {
    return 'no'
  }
  else if (num === 2) {
    return 'yes'
  }
  else if (num % 2 === 0) {
    return 'no'
  }
  else {
    for (let j = 3; j < Math.sqrt(num); j++) {
      if (num % j === 0) {
        return 'no'
      }
    }
  }

  return 'yes'
}

export default () => {
  const problems = []
  const answers = []

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const num = getRandomNumber()

    problems[i] = num.toString()
    answers[i] = getAnswer(num)
  }

  const data = {
    question: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    problems: problems,
    answers: answers,
  }

  game(data)
}
