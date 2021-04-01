import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

class TaskList extends React.Component{
    render(){
        return(
            <div className="tasksListContainer">
                <div className="taskList">
                    {this.props.tasks.map(
                        task => <Task key={task.key} text={task.text} id={task.id} removeTask={this.props.removeTask} />
                    )}
                </div>
            </div>
        )
    }
}

export default TaskList;