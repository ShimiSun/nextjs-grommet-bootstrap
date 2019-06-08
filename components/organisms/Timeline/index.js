/**
 * My first reflex was to use react-admin's <List> component, 
 * letting react-admin fetch the events. 
 * 
 * That way, I'd just have to decide which <TimelineXXX> component 
 * to render based on the data fetched by react-admin. 
 * That means I initially wrote the Timeline component as follows:
 */

import React,{Fragment,useState,useEffect} from 'react';
import TimelineLoaded from 'components/molecules/TimelineLoaded';
import TimelineLoading from 'components/molecules/TimelineLoading';
import TimelineEmpty from 'components/molecules/TimelineEmpty';
import { ListController,Title } from 'react-admin';

export const TimelineView = (props) =>
   { // independnt of react-admin hence easy to test with storybook

const { ids, data, total, loadedOnce,setPage,page }=props
    const [events,setEvents]=useState([])

    const processEvents = React.useCallback( () => {
      
       if(ids){
        const newEvents = ids.map(id => data[id]);
          setEvents([...events,...newEvents])
       }
    }, [data,ids]);

    useEffect( () => {
       processEvents()
}, [data,events,ids,processEvents]);

const handleLoadMore = () => {
    setPage(page + 1);
};


       if(!loadedOnce){
           return <TimelineLoading />
       }

       if(events.length > 0 ){
           return <TimelineLoaded
           events={events}
                total={total}
        handleLoadMore={handleLoadMore}
       />
       }
      return  <TimelineEmpty />
    };

const Timeline = props => (
    <ListController {...props}>
        {controllerProps => (
            <Fragment>
                <Title title="Events" />
                <TimelineView {...props} {...controllerProps} />
            </Fragment>
        )
        }
    </ListController>
);

export default Timeline;