import React from "react";
import {connect} from "react-redux";
import {getIsAuth, setIsAuth} from "../../redux/auth-reducer";
import Login from "./Login";


class LoginContainer extends React.Component{
    state = {wrongMode:false}
    componentDidMount() {
        this.props.getIsAuth();
    }
         wrongMode = (e) =>{

             if(!localStorage.isAuth) {
                 e.preventDefault()
                 this.setState({wrongMode: true});
                 setTimeout(() => this.setState({wrongMode: false}), 3000);
             }
        }



    render() {
        return <Login setAuth = {this.props.setIsAuth.bind(this)}
                      getAuth = {this.props.getIsAuth.bind(this)}
                      isAuth = {this.props.auth.isAuth}
                      togglewrongMode = {this.wrongMode.bind(this)}
                      wrongMode = {this.state.wrongMode}
        />
    }
}
const mapStateToProps = (state) =>  {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps,{setIsAuth, getIsAuth})(LoginContainer)
