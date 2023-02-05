import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleToggle = () => this.props.handleToggle();
    render() {
        let is_show_form = this.props.show_form;
        let genarator_button_add =  null;
        (is_show_form === true) ? (genarator_button_add = <button onClick={()=>this.handleToggle()} type="button" className="btn btn-danger w-100">Close Task</button>) : (genarator_button_add = <button onClick={()=>this.handleToggle()} type="button" className="btn btn-info w-100">Add Task</button>)
        return (
            <div className="row">
                <Search handleSearch ={this.props.search} handleClear = {this.props.clear}/>
                <Sort onClickSort = {this.props.handleSort}/>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {genarator_button_add}
                </div>
            </div>
        );
    }
}

export default Control;
