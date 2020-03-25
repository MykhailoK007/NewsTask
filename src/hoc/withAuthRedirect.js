import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../redux/auth-reducer";
const mapStateToProps = (state) => {
    return {
        isaAuth: state.auth.isAuth
    }

}
export const withAuthRedirect = (Component) => {
        class RedirectComponent extends React.Component{
            render() {
                if(!this.props.isAuth) return <Redirect to='/login'/>
                return <Component {...this.props}/>
            }
        }
        const conncectAuthRedirectComponent = connect(mapStateToProps,getIsAuth)(RedirectComponent);
        return conncectAuthRedirectComponent
}