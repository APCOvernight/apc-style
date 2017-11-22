const eslint = require('eslint')
const chai = require('chai')
const expect = chai.expect

const CLIEngine = eslint.CLIEngine

const cli = new CLIEngine()

describe('ES Lint validation', () => {
  it('No Errors in valid code', () => {
    const code = 'const foo = 1\nconst bar = function () {}\nbar(foo)\n'

    expect(cli.executeOnText(code).errorCount).to.equal(0)
  })

  it('Throw an error with a semi colon', () => {
    const code = 'const foo = 1;\nconst bar = function () {}\nbar(foo)\n'

    expect(cli.executeOnText(code).errorCount).to.equal(1)
  })
})
