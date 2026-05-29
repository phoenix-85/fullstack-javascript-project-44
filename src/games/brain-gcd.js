#!/usr/bin/env node
import game from '../index.js'

const MIN_NUMBER = 20
const MAX_NUMBER = 80
const MAX_ROUNDS = 3

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  return Math.floor(min + Math.random() * (max - min))
}

const gcd = (a, b) => {
  return (b === 0) ? a : gcd(b, a % b)
}

export default () => {
  const problems = []
  const answers = []

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const num1 = getRandomNumber()
    const num2 = getRandomNumber()

    problems[i] = `${num1} ${num2}`
    answers[i] = gcd(num1, num2).toString()
  }

  const data = {
    question: 'Find the greatest common divisor of given numbers.',
    problems: problems,
    answers: answers,
  }

  game(data)
}
