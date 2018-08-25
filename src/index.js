import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function ListItem(props) {
    return(
        <li>
            {props.item}<button className="close" onClick={props.onClick}>x</button>
        </li>
    )
}

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    onClick(index) {
        const newList = this.state.list.slice();
        newList.splice(index, 1);
        this.setState({list: newList});
    }

    addItem(props) {
        const item = document.getElementById("listItem").value;
        document.getElementById("listItem").value = "";
        const newList = this.state.list.slice();
        newList.push(item);
        this.setState({list: newList});
    }

    render() {
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
}

// ========================================

ReactDOM.render(
    <ShoppingList />,
    document.getElementById('root')
);
