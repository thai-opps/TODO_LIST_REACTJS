import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task_name:'',
            task_level:0,
            task_id:''
        };
    }
    componentWillMount = () =>{
        let item = this.props.itemSelected;
        if(item !== null){
            this.setState({task_id:item.task_id,task_name:item.task_name,task_level:item.task_level});
        }
    }
    componentWillReceiveProps = (nextProps) =>{
        let item = nextProps.itemSelected;
        if(item !== null){
            this.setState({task_id:item.task_id,task_name:item.task_name,task_level:item.task_level});
        }
    }
    onClickCancel = ()=> {
        this.props.handleCancel();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let item = null;
        (this.state.task_name === '') ? (alert("Task name is required!")):(
            item = {
                task_id:this.state.task_id,
                task_name: this.state.task_name,
                task_level: this.state.task_level
            }
        )
        this.props.handleSubmit(item);
    }
    handlingMutiple = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value,
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-5 offset-md-7 ">
                    <form action="#" method='POST' onSubmit={this.handleSubmit} >
                        <div className="row mt-3">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <input value={this.state.task_name} type="text" name='task_name' className="form-control" placeholder="Task Name" onChange={this.handlingMutiple} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select form-select" aria-label="form-select" name='task_level' value={this.state.task_level} onChange={this.handlingMutiple}>
                                    <option value={0}>Small</option>
                                    <option value={1}>Medium</option>
                                    <option value={2}>High</option>
                                </select>
                            </div>
                            <div className='col-md-12 d-flex justify-content-between mt-3'>
                                <button onClick={()=>this.onClickCancel()} type='button' className='btn btn-danger'>Cancel</button>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <hr className='mt-5' />
            </div>
        );
    }
}

export default Form;
