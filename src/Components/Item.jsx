import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    handleDelete = (id) => {
        this.props.deleteItem(id)
    }
    handleEdit = (item) => {
        this.props.handleEdit_Item(item);
    }
    render() {
        let item = this.props.genarateItem;
        let index = this.props.index;
        let level_generator = null;
        if(item.task_level === 0)
            level_generator = <span className="btn btn-secondary btn-sm">Small</span>;
        else if(item.task_level === 1)
            level_generator = <span className="btn btn-warning btn-sm">Medium</span>;
        else level_generator = <span className="btn btn-danger btn-sm">High</span>;
        return (
            <tr>
                <td className="text-center">{index+1}</td>
                <td>{item.task_name}</td>
                <td className="text-center">{level_generator}</td>
                <td className='text-center'>
                    <button onClick={()=>this.handleEdit(item)} type="button" className="btn btn-warning me-2">Edit</button>
                    <button onClick={()=> this.handleDelete(item.task_id)}type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Item;
