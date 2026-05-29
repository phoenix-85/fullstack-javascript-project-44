import greeting from './cli.js'
import readlineSync from 'readline-sync'

const MAX_ROUNDS = 3

export default (data) => {
  const name = greeting()

  console.log(data.question)

  let i = 0
  for (; i < MAX_ROUNDS; i++) {
    console.log(`Question: ${data.problems[i]}`)
    const input = readlineSync.question('Your answer: ')

    if (input === data.answers[i]) {
      console.log('Correct!')
    }
    else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${data.answers[i]}'.`)
      break
    }
  }

  console.log(i === MAX_ROUNDS ? `Congratulations, ${name}!` : `Let's try again, ${name}!`)
}
