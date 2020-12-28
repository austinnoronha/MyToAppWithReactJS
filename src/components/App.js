import React, {Component} from 'react'
//import ReactDOM from 'react-dom';
import List from './List';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            mytodo: '',
            myitems: []
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		}, () => {
			//console.log(e.target.value)
		})
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {mytodo} = this.state;

        e.preventDefault();
        if (mytodo.length === 0) {
            return;
        }

        const newItem = {
            text: mytodo,
            id: Date.now()
        };
        
        this.setState(state => ({
            myitems: state.myitems.concat(newItem),
            mytodo: ''
        }));
        
    }

    render(){
        return (
            <div>
                <h2>MyTodo App</h2>
                <hr />
                <input type='text' name='mytodo' id='mytodo' value={this.state.mytodo} onChange={this.handleChange} required />
                <button type='submit' onClick={this.handleSubmit}>
                    Submit
                </button>
                <List items={this.state.myitems}></List>
            </div>
        );
    }
}