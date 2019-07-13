import React from 'react';
import App from 'next/app';
import { Grommet } from 'grommet';
import theme from 'themes/theme'
import { loadReCaptcha } from 'react-recaptcha-google';
import { StripeProvider } from 'react-stripe-elements';
import 'static/css/styles.css'



class MyApp extends App {
  state={
    stripe:null
  }

  componentDidMount() {
    loadReCaptcha();
    if (window.Stripe) {
      this.setState({stripe: window.Stripe(process.env.STRIPE_PUBLISHABLE)});
        }
   
  }

  render() {
    const { Component, pageProps } = this.props;
    const {stripe}=this.state
    return (
      
      <Grommet theme={theme} style={{"height":"100vh"}}>
     
     
      {/** 
      Typically, you should include Grommet only once as one of your top-level nodes.
      We are extending Grommet to take the full viewport height and width.
       */}
       <StripeProvider {...{ stripe }}>
          
          <Component {...pageProps} {...this.state}/>
       
      </StripeProvider>
      </Grommet>
    );
  }
}

export default MyApp;