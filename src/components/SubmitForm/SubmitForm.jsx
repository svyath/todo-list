import React from 'react';
import './SubmitForm.css';


class SubmitForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {tasksCount: 0};
        this.addItem = this.addItem.bind(this);
    }

    addItem(event){
        if(this.inputElement.value !== ""){
            let newItem = {
                text: this.inputElement.value,
                id: this.state.tasksCount,
                key: Date.now()
            };
            this.props.addTask(newItem);
            this.state.tasksCount++;
            this.inputElement.value = "";
        }
        event.preventDefault();
    }

    render(){
        return(
            <div className="form">
                <form action="Add task" onSubmit={this.addItem}>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Add new task..." 
                        ref={(item) => this.inputElement = item}
                        required
                    />
                    <button type="submit" className="addTaskBtn">Add</button>
                </form>
            </div>
        )
    }
}

export default SubmitForm;