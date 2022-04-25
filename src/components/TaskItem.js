import React, { Component } from 'react'
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { BsBackspaceReverseFill } from 'react-icons/bs';
class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false,
        }
    }
    setEditingState = (isEditing) => {
        this.setState({ isEditing: isEditing })
    }
    toggleTask = () => {
        this.props.toggleTask(this.props.id)
    }
    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    }
    handleChange = (event) => {
        this.setState({ task: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }
    render() {
        return (
            <tr className='tasks'>
                {this.state.isEditing ?
                    <>
                        <td>
                            <form onSubmit={this.handleSubmit}>
                                <input className='editInput' value={this.state.task}
                                    onChange={this.handleChange}
                                    autoFocus />
                            </form>
                        </td>
                        <td className='inline'>

                            <button className='save' onClick={this.handleSubmit} type='submit'>Save<BiSave className='icon' /></button>
                            <button className='back' onClick={() => this.setEditingState(false)} type='button'>Back<BsBackspaceReverseFill className='icon' /></button>
                        </td>
                    </>
                    :
                    <>
                        <td className='task' onClick={this.toggleTask}>

                            <input type='checkbox' readOnly
                                checked={this.props.taskItem.isCompleted} />

                            <span className={this.props.taskItem.isCompleted ? 'completed' : 'not-completed'}>
                                {this.props.taskItem.task}
                            </span>
                        </td>
                        <td className='inline'>
                            <button className='edit' onClick={() => this.setEditingState(true)}>Edit <FiEdit className='icon' /></button>
                            <button className='delete' onClick={this.deleteTask}>Delete<MdOutlineDeleteOutline className='icon' /></button>
                        </td>
                    </>
                }
            </tr>
        );
    }
}
export default TaskItem