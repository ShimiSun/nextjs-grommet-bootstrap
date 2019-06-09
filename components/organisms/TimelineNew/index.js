// in src/Timeline.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Title, crudGetList } from 'react-admin';
import TimelineLoaded from 'components/molecules/TimelineLoaded';
import TimelineLoading from 'components/molecules/TimelineLoading';
import TimelineEmpty from 'components/molecules/TimelineEmpty';

class TimelineNew extends Component {
    page = 1;

    constructor(props) {
        super(props);
        this.state = {
            events: props.ids.map(id => props.data[id]),
            latestId: props.ids[props.ids.length - 1],
        };
    }

   

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps, prevState) {
        const {ids,}=this.props
        if (ids !== prevProps.ids) {

            const latestId = ids[ids.length - 1];

            if (latestId && latestId !== prevState.latestId) {
                this.mooz()
            }
            
        }
    }

    componentWillUnmount() {
        this.page = 1;
        this.updateData();
    }

    mooz=()=>{
        const {ids,data}=this.props
            const newEvents = ids.map(id => data[id]);
            this.setState(state => ({
                events: state.events.concat(newEvents),
            
            }));
        }
    

    updateData = () => {
      const {crudGetListN} = this.props
        crudGetListN(
            'events',
            { page: this.page, perPage: 10 },
            { field: 'id', order: 'DESC' }
        );
    };

    handleLoadMore = () => {
        this.page = this.page + 1;
        this.updateData();
    };

    render() {
        const { events } = this.state;
        const { total, loadedOnce } = this.props;
        return (
            <>
                <Title title="Events" />
                {!loadedOnce ? (
                    <TimelineLoading />
                ) : (<>
                    {
                        events.length === 0 ? (
                    <TimelineEmpty />
                ) : (
                    <TimelineLoaded
                        events={events}
                        total={total}
                        handleLoadMore={this.handleLoadMore}
                    />
                )
                    }
                </>)}
            </>
        );
    }
}

TimelineNew.defaultProps = {
    ids: [],
    data: {},
    crudGetListN: () => null,
};



const mapStateToProps = (state /* , ownProps */) => ({
    ids: state.admin.resources.events.list.ids,
    data: state.admin.resources.events.data,
    total: state.admin.resources.events.list.total,
    loadedOnce: state.admin.resources.events.list.loadedOnce,
});
  

const mapDispatchToProps = { crudGetListN:crudGetList}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineNew)

