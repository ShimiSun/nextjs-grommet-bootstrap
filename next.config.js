
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });
const withTM = require('next-plugin-transpile-modules');

const path = require('path')
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css')

module.exports =withTM(withCSS({
  transpileModules: ['grommet-controls', 'grommet', 'grommet-icons'],
    webpack (config) {

        config.plugins.push(
         new Dotenv({
           path: path.join(__dirname, '.env'),
           systemvars: true
         })
        );

        // Here is the magic
        // We push our config into the resolve.modules array
        config.resolve.modules.push(path.resolve('./'))
       
           return config; 
       }
}));
