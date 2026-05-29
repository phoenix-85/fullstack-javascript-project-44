#!/usr/bin/env node
import game from '../index.js'

const MIN_NUMBER = 10
const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  return Math.floor(min + Math.random() * (max - min))
}

export default () => {
  const problems = []
  const answers = []

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const num = getRandomNumber()
    const answer = num % 2 === 0 ? 'yes' : 'no'

    problems[i] = num.toString()
    answers[i] = answer
  }

  const data = {
    question: 'Answer "yes" if the number is even, otherwise answer "no".',
    problems: problems,
    answers: answers,
  }

  game(data)
}
