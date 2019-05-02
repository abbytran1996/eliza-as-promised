let elizaLib = require('./lib/elizabot')

let elizaBot = new elizaLib()

function test (line) {
  let out = elizaBot.transform(line)
  console.log(line, '=>', out)
}

test('how are you')

console.log('eliza ready')
