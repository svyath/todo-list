import React from 'react';
import './Task.css';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.setDone = this.setDone.bind(this);
        this.removeTask = this.removeTask.bind(this);
        //TODO editTask
        this.state = {backgroundColor: ''};
    }

    setDone(){
        if(this.state.backgroundColor === ''){
            this.setState({backgroundColor: 'limegreen'});
        } else{
            this.setState({backgroundColor: ''});
        }
    }

    removeTask(){
        this.props.removeTask(this.props.id);
    }

    render(){
        return(
            <div className="taskContainer">
                <div className="taskInner" style={{backgroundColor: this.state.backgroundColor}}>
                    <p className="taskInfo">{this.props.text}</p>
                    <div className="buttons">
                        <button className="setDoneBtn" onClick={this.setDone}>V</button>
                        <button className="deleteBtn" onClick={this.removeTask}>X</button>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Task;