import React from 'react';
import ListItem from './list_item';

const List = (props) => {
        
    const listElements = props.toDos.map((item) => {
        console.log('Item:', item);
        return <ListItem delete={() => props.delete(item._id)} key={item._id} title={item.title} />
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    );
}

export default List;
