import {newsAPI} from "../Components/api";

const SET_LIST_OF_NEWS = "SET_LIST_OF_NEWS"

const initalState = {
    news:[]
}
const newsReducer = (state = initalState, action) => {
    switch(action.type) {
        case SET_LIST_OF_NEWS:{
            return {
                news:[...action.news]
            }
        }
        default :
            return state
    }
}

export const setListOfNews = (news) => {
    return {
        type: SET_LIST_OF_NEWS,
        news
    }
}

export const getNews = () => dispatch => {
   return  newsAPI.getNews()
        .then(responce => {
            if(responce.status === 200) {
                dispatch(setListOfNews(responce.data.articles));
                console.log(responce.data.articles)
            }
        })

}


export default newsReducer;