import React from 'react'

function ListItem(props) {
    return(
        <li>
            {props.item}<button className="close" onClick={props.onClick}>x</button>
        </li>
    )
}

export default function List(props) {
    const listItems = [];
    this.state.list.forEach((item, i) => {
        listItems.push(<ListItem item={item} onClick={() => this.onClick(i)} />)
    });	
	return (
        <div className="shopping-list">
            <h1>Shopping List</h1>
            <input type="text" id="listItem" placeholder="Add Item" />
            <button type="button" onClick={() => this.addItem()}>Add</button>
            <ul>
                {listItems}
            </ul>
        </div>
	)
}