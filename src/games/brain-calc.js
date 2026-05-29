#!/usr/bin/env node
import game from '../index.js'

const OPERATORS = ['+', '-', '*']
const MIN_NUMBER = 10
const MAX_NUMBER = 100
const MAX_ROUNDS = 3

const getRandomNumber = (min = MIN_NUMBER, max = MAX_NUMBER) => {
  return Math.floor(min + Math.random() * (max - min))
}

const calc = (num1, num2, op) => {
  switch (op) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
  }
}

export default () => {
  const problems = []
  const answers = []

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const num1 = getRandomNumber()
    const num2 = getRandomNumber()
    const op = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)]

    problems[i] = `${num1} ${op} ${num2}`
    answers[i] = calc(num1, num2, op).toString()
  }

  const data = {
    question: 'What is the result of the expression?',
    problems: problems,
    answers: answers,
  }

  game(data)
}
