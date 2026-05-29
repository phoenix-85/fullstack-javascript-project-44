#!/usr/bin/env node
import game from '../index.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100
const START_INCREMENT_VALUE = 1
const END_INCREMENT_VALUE = 9
const MIN_PROGRESSION_LENGTH = 5
const MAX_PROGRESSION_LENGTH = 10
const MAX_ROUNDS = 3

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  return Math.floor(min + Math.random() * (max - min))
}

export default () => {
  const problems = []
  const answers = []

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const num = getRandomNumber()
    const inc = getRandomNumber(START_INCREMENT_VALUE, END_INCREMENT_VALUE)
    const len = getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH)
    const index = getRandomNumber(0, len)

    const parts = []
    for (let j = 0; j < len; j++) {
      parts.push(j === index ? '..' : (num + inc * j).toString())
    }

    problems[i] = parts.join(' ')
    answers[i] = (num + inc * index).toString()
  }

  const data = {
    question: 'What number is missing in the progression?',
    problems: problems,
    answers: answers,
  }

  game(data)
}
