import React from 'react';
import { Admin, Resource } from 'react-admin';
import Timeline from 'components/organisms/Timeline';
import jsonRestProvider from 'ra-data-fakerest';
import data from 'api/data';
   

const App = () => {
   
    let provider=null

    if(process.browser) {
        const dataProvider=jsonRestProvider(data, true)
       provider = (type, resource, params) =>
        new Promise(resolve =>
            setTimeout(() => resolve(dataProvider(type, resource, params)), 1000)
        );
       // setProvider(delayedDataProvider) 
    }
        
    if(provider){
        
        return(
            <Admin dataProvider={provider}>
                            <Resource name="events" list={Timeline} />
                           
                        </Admin>
        )
}
    return <div/>
}

export default App;