import React from "react";
import classes from './Profile.module.css'
const Profile = () => {
    return (
        <div className={"container " + classes.container}>
            <div className="columns ">
                <div className={"column " +classes.lefSide}>
                    <img src="https://img.icons8.com/ios/50/000000/user.png" alt="" className={classes.avatar}/>
                </div>
                <div className="column">
                    <p className="is-size-3	">Admin</p>
                    <p>Status</p>
                    <p>Age</p>

                </div>
            </div>
        </div>
    )
}
export default Profile
