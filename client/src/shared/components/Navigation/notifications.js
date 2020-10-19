import React, { Component } from "react";

import InfiniteScroll from "react-infinite-scroller";



class Scroll2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 20,
            hasMoreItems: true
        };
    }

    showItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
            items.push(<li key={i}> Item {i} </li>);
        }
        return items;
    }

    loadMore() {
        if (this.state.items === 200) {

            this.setState({ hasMoreItems: false });
        } else {
            setTimeout(() => {
                this.setState({ items: this.state.items + 20 });
            }, 2000);
        }

    }

    render() {
        return (
            <div className="App">


                <div style={{ height: '200px', overflow: 'auto' }}>
                    <InfiniteScroll
                        loadMore={this.loadMore.bind(this)}
                        hasMore={this.state.hasMoreItems}
                        loader={<div className="loader"> Loading... </div>}
                        useWindow={false}
                    >
                        {this.showItems()}{" "}
                    </InfiniteScroll>{" "}
                </div>{" "}
            </div>
        );
    }
}

export default Scroll2;