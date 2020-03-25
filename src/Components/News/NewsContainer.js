import React from "react";
import {getNews} from "../../redux/news-reducer";
import {connect} from "react-redux";
import New from "./News";

class NewsContainer extends React.Component{
    componentDidMount() {
        this.props.getNews()
        console.log(123)
    }

    render() {
        return <div>
            {this.props.news.map( news => {
                return <New title = {news.title}
                            img = {news.urlToImage}
                            content = {news.content}
                            url = {news.url}
                            key = {news.publishedAt}
                            author={news.author}
                />
            })}
        </div>

    }
}

const mapStateToProps = (state) => {
    return{
        news: state.news.news
    }
}

export default connect(mapStateToProps, {getNews})(NewsContainer);