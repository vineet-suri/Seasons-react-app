import React from 'react';

const Spinner = (props) => {
    return ( 
        <div className="ui-segmet">
            <p></p>
            <div className="ui active dimmer">
            <div class="ui big text loader">{props.message}</div>
            </div>
        </div>
     );

    }
    
    Spinner.defaultProps = {
       message: 'Loading'
    };
export default Spinner;
 