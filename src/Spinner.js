const Spinner = (props) => {
    return ( 
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}.
            </div>
        </div>
    );
}

// .defaultProps, defined on function itself
// will provide default property to component
// will run if no message is passed
// will be our default message
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;