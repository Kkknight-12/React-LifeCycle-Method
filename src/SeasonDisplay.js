const seasonConfig = {
    Summer: {
        text: 'Lets go to beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'Its Chilly',
        iconName: 'snowflake'
    }
}

const getSeason = ( lat, month )  => {
    if( month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = (props) => {

    // getting the season with getSeason function
    const season = getSeason( props.lat, new Date().getMonth() );
    // taking in season value "Winter" | "Summer", sending it to 
    // seasonConfig then destructring obj
    const { text, iconName } = seasonConfig[season];

    return ( 
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{ text }</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;