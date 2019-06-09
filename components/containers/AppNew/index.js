import React from 'react';
import { Admin, Resource } from 'react-admin';
import TimelineNew from 'components/organisms/TimelineNew';
import jsonRestProvider from 'ra-data-fakerest';
import data from 'api/data';
   

const AppNew = () => {
   
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
                            <Resource name="events" list={TimelineNew} />
                           
                        </Admin>
        )
}
    return <div/>
}

export default AppNew;