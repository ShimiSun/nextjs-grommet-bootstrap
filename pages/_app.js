import React from 'react';
import App from 'next/app';
import { Grommet } from 'grommet';
import theme from 'themes/theme'


import 'static/css/styles.css'



class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      
      <Grommet theme={theme} style={{"height":"100vh"}}>
     
     
      {/** 
      Typically, you should include Grommet only once as one of your top-level nodes.
      We are extending Grommet to take the full viewport height and width.
       */}
     
       
       <Component {...pageProps} />
        
      </Grommet>
    );
  }
}

export default MyApp;