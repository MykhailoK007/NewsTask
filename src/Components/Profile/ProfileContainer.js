import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import {getIsAuth} from "../../redux/auth-reducer";

class ProfileContainer extends React.Component{

    componentDidMount() {
        this.props.getIsAuth()
    }

    render() {
           return <Profile/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{getIsAuth})(withAuthRedirect(ProfileContainer))