import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {
    render() {
        return (
            <table className='tasks'>
                <thead>
                    <tr className='task-description'>
                        <th>Task</th>
                        <th>description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => (
                        <TaskItem
                            key={index}
                            taskItem={task}
                            id={index}
                            deleteTask={this.props.deleteTask}
                            editTask={this.props.editTask}
                            toggleTask={this.props.toggleTask} />
                    ))}
                </tbody>
            </table>
        )
    }
}
export default TaskList