const SassLint = require('sass-lint')
const chai = require('chai')
const expect = chai.expect

describe('Sass Lint validation', () => {
  it('No Errors in valid code', () => {
    const code = 'p {\n  font-size: 1.2rem;\n}\n'
    const results = SassLint.lintText({text: code, format: 'scss', filename: 'my-code.scss'}, null, '../.sass-lint.yml')

    expect(results.errorCount).to.equal(0)
    expect(results.warningCount).to.equal(0)
  })

  it('Throw an error with a missing semi colon', () => {
    const code = 'p {\n  font-size: 1.2rem\n}\n'
    const results = SassLint.lintText({text: code, format: 'scss', filename: 'my-code.scss'}, null, '../.sass-lint.yml')

    expect(results.warningCount).to.equal(1)
    expect(results.messages.length).to.equal(1)
    expect(results.messages[0].ruleId).to.equal('trailing-semicolon')
  })
})
