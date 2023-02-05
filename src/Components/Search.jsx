import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            str_search:'',
        }
    }
    handleChange = (event) => {
        this.setState({str_search:event.target.value});
    }
    handle_search_for = (str) => {
        this.props.handleSearch(this.state.str_search);
        this.setState({str_search:''});
    }
    handleClearSearch = () =>{
        this.setState({str_search:''});
        this.props.handleClear();
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.str_search} placeholder="Search for..." onChange={this.handleChange}/>
                    <button onClick={this.handleClearSearch} className="btn btn-danger" type="button">Clear</button>
                    <button onClick={this.handle_search_for} className="btn btn-info" type="button">Search</button>
                </div>
            </div>
        );
    }
}

export default Search;
