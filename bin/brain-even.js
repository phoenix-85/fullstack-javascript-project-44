#!/usr/bin/env node
import greeting from '../src/cli.js'
import readlineSync from 'readline-sync'

const name = greeting()
const MAX_ROUNDS = 3
let round = 0
console.log('Answer "yes" if the number is even, otherwise answer "no".')

for (let i = 0; i < MAX_ROUNDS; i++) {
  const num = Math.floor(Math.random() * 100)
  const answer = num % 2 === 0 ? 'yes' : 'no'

  console.log(`Question: ${num}`)
  const input = readlineSync.question('Your answer: ')

  if (input === answer) {
    console.log('Correct!')
  }
  else {
    console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`)
    break
  }

  round++
}

console.log(round === MAX_ROUNDS ? `Congratulations, ${name}!` : `Let's try again, ${name}!`)
