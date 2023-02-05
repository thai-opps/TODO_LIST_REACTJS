import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const items = this.props.items;
        let genaratorItems = null;
        genaratorItems = items.map((item, index) => <Item 
                                                        deleteItem = {this.props.handleDelete}
                                                        genarateItem={item} key={index} 
                                                        index={index}
                                                        handleEdit_Item={this.props.handle_edit}
                                                    />)
        return (
            <div className="card mt-3">
                <div className="card-header bg-primary text-white">List Task</div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }} className="text-center">#</th>
                            <th>Task</th>
                            <th style={{ width: '20%' }} className="text-center">Level</th>
                            <th style={{ width: '20%' }} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genaratorItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;
