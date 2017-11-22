const PugLint = require('pug-lint/lib/linter')
const chai = require('chai')
const expect = chai.expect

describe('Sass Lint validation', () => {
  it('No Errors in valid code', () => {
    const code = 'div\n  p Hello World\n'
    const linter = new PugLint()
    linter.configure({extends: '.pug-lintrc'})

    expect(linter._configuredRules).to.be.an('array')
    const results = linter.checkString(code)

    expect(results).to.be.an('array')
    expect(results.length).to.equal(0)
  })

  it('Throw an error with incorrect indentation', () => {
    const code = 'div\n\tp Hello World\n'
    const linter = new PugLint()
    linter.configure({extends: '.pug-lintrc'})
    const results = linter.checkString(code)

    expect(results).to.be.an('array')
    expect(results.length).to.equal(1)
    expect(results[0].message).to.contain('Invalid indentation')
  })
})
