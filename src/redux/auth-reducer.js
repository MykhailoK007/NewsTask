const SET_AUTH = "SET_AUTH";
const GET_AUTH = "GET_AUTH";

const initalState = {
    isAuth: localStorage.isAuth
}
const authReducer = (state = initalState, action) => {
                switch (action.type) {
                    case SET_AUTH:{
                      (action.username === "admin" && action.password === "12345")
                          ? localStorage.setItem('isAuth','true')
                          :localStorage.setItem('isAuth','');

                     return {isAuth: localStorage.isAuth}
                    }

                    case GET_AUTH: {

                        state.isAuth = (localStorage.getItem('isAuth'))
                            ? localStorage.getItem('isAuth')
                            :  '';
                        return state
                    }
                    default:
                        return state
                }

}
export const setIsAuth = (username, password) => {
    return {
        type: SET_AUTH,
        username,
        password
    }
}
export const getIsAuth = () => {
    return {
        type: GET_AUTH
    }
}
export default authReducer;