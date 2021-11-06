import Header from "./components/common/Header/Header";
import "./App.css";
import PostListing from "./components/common/PostListing/PostListing";
import PostDetail from "./components/postDetail/PostDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={PostListing} />
          <Route exact path="/postdetail" component={PostDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
