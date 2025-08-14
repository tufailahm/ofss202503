import React from "react";

class VisitorCounter extends React.Component {

    constructor() {
        super();
        console.log('1. Visitor constructor called')
        this.state = {
            counter: 100,
            message: 'Its raining'
        }
    }
    render() {
        console.log('2.Render of Visitor Controller called')
        return <div><h2 className="highlight">
            Today's message is : {this.state.message}<br />
            You are visitor number [props] :{this.props.counter}<br />
            You are visitor number [state] :{this.state.counter}
            <br/>
            <button onClick={this.changeCounter}>Click</button></h2>
            <button onClick={this.changeMessage}>Change Message</button></div>

    }
    changeCounter = () => {
        console.log("1.  Change counter called")
        this.setState({
            //counter: this.state.counter + 1
            
        }, () => {  //sync
            console.log("3. Counter changes")
        },() => {
            console.log("4. Error happens")
        })
        //async
        console.log("2. Counter changed successfully")
    }


    changeMessage = () => {
        this.setState({
            message: 'Trainer name is Mohammad Tufail Ahmed'
        })
    }
}

export default VisitorCounter;