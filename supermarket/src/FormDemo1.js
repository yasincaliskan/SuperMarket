import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {userName: ""}
    onChangeHandler = (event) => {
        this.setState({userName:event.target.value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        alert(this.state.userName)
    }
        render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h4>User Name</h4>
                    <input onChange={this.onChangeHandler} type="text"></input>
                    <h6>User Name is {this.state.userName}</h6>
                    <input type="submit" value="Save"></input>
                </form>
            </div>
        )
    }
}
