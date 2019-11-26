import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName: "", city:""}
    onChangeHandler = (event) => {
        let name = event.target.name
        let value = event.target.value

        this.setState({[name]:value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName + " " + this.state.city)
    }
        render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h4>User Name: </h4>
                    <input name="userName" onChange={this.onChangeHandler} type="text"></input>

                    <h4>City: </h4>
                    <input name="city" onChange={this.onChangeHandler} type="text"></input>
                    
                    <input type="submit" value="Save"></input>
                </form>
            </div>
        )
    }
}
