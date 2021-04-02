import React from 'react';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.setDone = this.setDone.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.state = {backgroundColor: '', textDecoration: 'none'};
    }

    setDone(){
        if(this.state.backgroundColor === ''){
            this.setState({backgroundColor: 'limegreen', textDecoration: 'line-through'});
        } else{
            this.setState({backgroundColor: '', textDecoration: 'none'});
        }
    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    editTask(){
        this.props.editTask(this.props.id);
    }
    
    render(){
        return(
            <div className="taskContainer" style={{backgroundColor: this.state.backgroundColor}}>
                <div className="taskInner">
                    <p className="taskInfo" style={{textDecoration: this.state.textDecoration}}>
                    <input type="text" id={this.props.id} value={this.props.text} 
                        //  TODO editing !!!!!!!!!
                    />
                    </p>
                    <div className="buttons">
                        <button className="setDoneBtn" onClick={this.setDone}><FontAwesomeIcon icon={faCheckCircle} size={"2x"} /></button>
                        <button className="deleteBtn" onClick={this.removeTask}><FontAwesomeIcon icon={faTrashAlt} size={"2x"} /></button>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Task;