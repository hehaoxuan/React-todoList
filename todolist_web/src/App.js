import Navbar from './Navbar';
import Home from './Home';
// import '~antd/dist/antd.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import TodoDetails from './TodoDetails';
import NotFoundPage from './NotFondPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/todos/:id">
              <TodoDetails />
            </Route>
            <Route path="*">
              <NotFoundPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

