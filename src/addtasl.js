import React, { Component } from 'react'
import Task from './taskC.js'
import Data from './data.js'

export default class Addtasl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: Data,
            onboardTask : "" ,
        }
        this.textInput = React.createRef();
    }
    deleteTaskF = (e,array)=> {
        e.preventDefault()
        this.setState({tasks : array})
    }
    updateV = () => {
        let node = this.textInput.current.value;
        this.setState({
            onboardTask: node
        })
    }

    addTask = ()=>{
        
        
        let array = this.state.tasks
        array.push(this.state.onboardTask)
        this.setState({
            tasks: array
        })
        

        console.log(typeof(node))
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">ToDo List</a>
                        </div>
                    </div>
                </nav>

                <div className="container">

                    <div className="content-area row">
                        <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>

                        <div className="col-md-8 col-xs-8 col-lg-8 col-sm-8">
                            <h2>ToDo List</h2>

                            <div className="row input-area">
                                <div className="col-md-1"></div>
                                <div className="form-group col-md-9">
                                    <input type="text" placeholder="New Task" className="form-control" id="addTask" onChange = {this.updateV} ref={this.textInput}/>
                                </div>
                                <div className="form-group col-md-1">
                                    <button className="btn btn-primary" onClick = {this.addTask} >Add</button>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <ul className="list-group" id="taskList">

                            </ul>
                        </div>

                        <div className="col-md-2 col-xs-2 col-lg-2 col-sm-2"></div>
                    </div>

                </div>
                {this.state.tasks.map((task, i) => <Task task={task} deleteTaskF={this.deleteTaskF} index={i} key={i} tasks = {this.state.tasks} />)}
            </div>
        )
    }
}
