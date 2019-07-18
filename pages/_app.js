import React from 'react';
import App from 'next/app';
import { Grommet } from 'grommet';
import theme from 'themes/theme'
import { loadReCaptcha } from 'react-recaptcha-google';
import { StripeProvider } from 'react-stripe-elements';
 import NextSeo from 'next-seo';
import 'static/css/styles.css'
 import config from 'config'

 const {SEO}=config


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
    console.log('stripe: ',stripe)
    return (
      
      <Grommet theme={theme} style={{"height":"100vh"}}>
 <NextSeo config={SEO} />
     
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