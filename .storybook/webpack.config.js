const path = require('path')

module.exports = async ({ config,mode }) =>{

    console.dir(config.plugins, { depth: null }) || config;

    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
  

     /* Make whatever fine-grained changes you need */
    
    // Here is the magic
        // We push our config into the resolve.modules array
        config.resolve.modules.push(path.resolve('./'))

       
    
    // Return the altered config
    return config;
  };