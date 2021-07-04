import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './pages/Home.js'
import Create from './pages/Create.js'
import Edit from './pages/Edit.js'
import BookPage from "./pages/BookPage.js";

import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/edit/:id" exact component={Edit} />
          <Route path="/book/:id" exact component={BookPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
