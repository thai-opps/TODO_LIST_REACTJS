import React, { Component } from 'react';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'task_name',
            orderDir: 'asc',
        }
    }
    handleSort = (orderBy, orderDir) => {

        this.setState({ orderBy, orderDir});
        this.props.onClickSort(orderBy,orderDir);
    }
    render() {
        let orderby = null;
        (this.state.orderBy === 'task_name') ? orderby ='name' : orderby = 'level';
        let sort_element = (orderby + ' - ' + this.state.orderDir).toUpperCase();
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown input-group">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort by
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><span onClick={()=> this.handleSort('task_name','asc')} className="dropdown-item" role="button">Name ASC</span></li>
                        <li><span onClick={()=> this.handleSort('task_name','desc')} className="dropdown-item" role="button">Name DESC</span></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><span onClick={()=> this.handleSort('task_level','asc')} className="dropdown-item" role="button">Level ASC</span></li>
                        <li><span onClick={()=> this.handleSort('task_level','desc')} className="dropdown-item" role="button">Level DESC</span></li>
                    </ul>
                    <span className='btn btn-success'>{sort_element}</span>
                </div>

            </div>
        );
    }
}

export default Sort;
