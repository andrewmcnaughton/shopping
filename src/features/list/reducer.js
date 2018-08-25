        const listItems = [];
        this.state.list.forEach((item, i) => {
            listItems.push(<ListItem item={item} onClick={() => this.onClick(i)} />)
        });