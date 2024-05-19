import React from 'react';
import "./EachSkill.css"
function EachSkill(props) {
    return (
        <div className='eachSkill'>
            {props.content}
        </div>
    );
}

export default EachSkill;
