
const sortByDate = (a, b) => new Date(b).valueOf() - new Date(a).valueOf();

// https://thomaskekeisen.de/en/blog/array-date-sort-lodash-momentjs/

const getDayForEvent = event => {
    const date = new Date(event.createdAt);
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    date.setHours(0);
    return date.toISOString();
};

const groupByDay = events => {
    const groups = events.reduce((days, event) => {
        const day = getDayForEvent(event);
        const events4Day=days
        if (!events4Day[day]) {
            events4Day[day] = [];
        }
        events4Day[day]= days[day].concat(event);
        return days;
    }, {});
    
    return {
        days: Object.keys(groups).sort(sortByDate),
        eventsByDay: groups,
    };
};


// console.log(groupByDay(events))

export default groupByDay;