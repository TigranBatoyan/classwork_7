import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeAge,changeName} from "./action";

class Test extends Component{
    render(){
        return(
                <div>
                    <button onClick={this.props.changeName}>Change name</button>
                    <button onClick={this.props.changeAge}>Change age</button>
                    {this.props.state.name}
                    <ul>
                        {
                            this.props.state.age.map((item,index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })

                        }
                    </ul>
                </div>
            )
    }
}
const mapStateToProps = (state) => {
    return{
        state:state
    }
}
const mapDispatchToProps = {changeName, changeAge}

export default connect(mapStateToProps, mapDispatchToProps)(Test)