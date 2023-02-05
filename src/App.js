/* eslint-disable array-callback-return */
import React from 'react';
import uuid from 'react-uuid';
import _, {orderBy as funcODB} from 'lodash';
import Header from './Components/Header';
import Control from './Components/Control';
import Form from './Components/Form';
import List from './Components/List';
// import tasks from './Data/task';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            is_show_form: false,
            str_search: '',
            orderBy: 'task_name',
            orderDir:'asc',
            itemSelected: null
        }
    }
    componentWillMount = () => {
        let items = JSON.parse(window.localStorage.getItem('courses')) || [];
        this.setState({
            courses: items,
        });
        //save on local storage
        // localStorage.setItem('items', JSON.stringify(this.state.courses));
    }
    handleToggle = () =>{
        this.setState({is_show_form:!this.state.is_show_form, itemSelected:null});
    }
    handleCancel = () =>{
        this.setState({is_show_form:false,itemSelected:null});
    }
    handleSearch = (str) => {
        this.setState({str_search:str});
    }
    handleClear = () => {
        this.setState({str_search:''});
    }
    handleSort = (orderBy, orderDir) => {
        this.setState({orderBy, orderDir});
    } 
    handleDeleteItem = (item_id) => {
        let items = this.state.courses
        _.remove(items, (item)=> item.task_id === item_id);
        this.setState({courses: items});
        window.localStorage.setItem('courses',JSON.stringify(items));
    }
    handleSubmitForm = (item) => {
        // add new task
        let items = this.state.courses;
        let course = null;
        if(item.task_id === ''){
            course = {task_id: uuid(), task_name: item.task_name, task_level:+item.task_level}
        }else{
            // Edit task
            items = _.reject(items,{task_id: item.task_id});
            course = {task_id: item.task_id, task_name: item.task_name, task_level:+item.task_level}
        }
        items.push(course);
        this.setState({courses:items,is_show_form:false,itemSelected:null});
        window.localStorage.setItem('courses',JSON.stringify(items));
    }
    handleEditItem = (item) => {
        this.setState({
            itemSelected: item,
            is_show_form: true,
        })
    }
    render() {
        const {courses,is_show_form,str_search, orderBy, orderDir, itemSelected} = this.state;
        let items = [];
        // Search items
        items =_.filter(courses, (item) => _.includes(item.task_name.toLowerCase(),str_search.toLowerCase()));
        //Sort items
        items = funcODB(items, [orderBy], [orderDir])
        let form_element = null;
        (is_show_form === true) ? (form_element = <Form 
                                    handleCancel={this.handleCancel} 
                                    handleSubmit={this.handleSubmitForm}
                                    itemSelected = {itemSelected}
                                />):(form_element=null)
        return (
            <div className="container">
                <Header/>
                <Control 
                    handleToggle={this.handleToggle} 
                    show_form ={is_show_form}
                    search = {this.handleSearch}
                    clear = {this.handleClear}
                    handleSort = {this.handleSort}
                />
                {form_element}
                <List 
                    items = {items} 
                    handleDelete = {this.handleDeleteItem}
                    handle_edit = {this.handleEditItem}
                />
            </div>
        )
    }
}