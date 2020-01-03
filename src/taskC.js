import React , {Component} from 'react' ;


export default class Task extends Component {
    constructor(props){
        super(props)
        this.state = {
            isComplete : false,
            clicked : false
        }
        
    }
    
    
    checkF = () => {
        this.setState({
            isComplete : !this.state.isComplete ,
        })
        
        console.log(this.state.isComplete)
    }
   
    updatetasks = (e)=> {
        e.preventDefault()
        console.log(this.props)
        var updated = this.props.tasks.filter((element) => element !== this.props.task ) ;
        this.props.deleteTaskF(e,updated)
    }
    

    render () {
        return (
                <li className="list-group-item checkbox" key = {this.props.key}>
            <div className="row">
		   <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
			<label><input id="toggleTaskStatus" type="checkbox" onChange={this.checkF} 
			 value="" /></label>
		   </div>
		   <div className={`col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${this.state.isComplete ? 'complete' : ''}`}>
			{this.props.task}
		  </div>
		  <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
			<a className="" href="/" >
            <i id="deleteTask" data-id="${index}" className="delete-icon glyphicon 
			glyphicon-trash" onClick = {this.updatetasks}></i></a>
		   </div>
		  </div>
          </li>
        )}

            




            

        
    }
