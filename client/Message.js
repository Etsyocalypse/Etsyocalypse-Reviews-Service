import React from 'react';

const Message = (props) => {
   
    if (props.tasks.length === 0) {
        return (
           <>
            <h5>Add an item to your to-do list!</h5>
           </>
        );
    } else {
        return (
           <>
            <h5>Click on an item to remove it from the list</h5>
           </>
        );
    }
}

export default Message;