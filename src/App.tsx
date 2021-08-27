import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Home, Product, Policy } from "screens";

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/policy" component={Policy} />
    </Switch>
  </Router>
);

export default App;
