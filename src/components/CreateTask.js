import React, { Component } from 'react'
import { AiFillFileAdd } from 'react-icons/ai';
class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            description: '',
            date: ''
        };
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTask(this.state.task, this.state.description, this.state.date);
        this.setState({
            task: '',
            description: '',
            date: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='inputsAndAdd'>
                <input
                    type="text"
                    placeholder='Enter Task'
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChange}
                    autoFocus ></input>
                <input
                    type="text"
                    name='description'
                    placeholder='Enter Description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    autoFocus ></input>
                <input
                    type="date"
                    name='date'
                    placeholder='Enter Date'
                    value={this.state.date}
                    onChange={this.handleChange}
                    autoFocus ></input>
                <button type='submit'>Add<AiFillFileAdd className='icon' /></button>
            </form>
        )
    }
}
export default CreateTask