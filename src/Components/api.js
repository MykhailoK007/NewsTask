import * as axios from 'axios'
const instance = axios.create({
    baseURL:'http://newsapi.org/v2/top-headlines?country=us&apiKey=ee44086072f343e4a500b2c5518c140f'
})
export const newsAPI = {
    getNews(){
        return instance.get()
            .then(responce => {
                console.log(responce)
                return responce
            })
    }

}
