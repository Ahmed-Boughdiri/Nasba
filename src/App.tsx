import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Home } from "screens";

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
