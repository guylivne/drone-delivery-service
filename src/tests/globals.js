'use strict';

const path = require('path');

const rootDir = path.join(__dirname, '../..');

global.expect = require('chai').expect;

global.APP_DIR = path.join(rootDir, 'src/app');
