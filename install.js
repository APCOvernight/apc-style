'use strict'
const gentlyCopy = require('gently-copy')
const path = require('path')
const opn = require('opn');
const projectDir = process.env.INIT_CWD || path.resolve('../../', __dirname)
const filesToCopy = ['.eslintrc', '.editorconfig']

gentlyCopy(filesToCopy, projectDir)
opn('https://github.com/APCOvernight/apc-style#readme', { 'wait': false })
