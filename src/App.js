import React from 'react';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import NewsContainer from "./Components/News/NewsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginContainer from "./Components/Login/LoginContainer";
function App() {
  return(
      <BrowserRouter>
        <Header/>
        <Route path = '/profile' exact component={(props) => <ProfileContainer {...props}/>}/>
        <Route path='/login' exact component={(props) => <LoginContainer {...props}/>}/>
          <Route path ='/news' exact component={(props) => <NewsContainer {...props}/>}/>

      </BrowserRouter>
  )

}

export default App;
