import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { 
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { 
  Home, 
  Product, 
  Policy, 
  Delivery, 
  Cart,
  Register,
  Login
} from "screens";

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/policy" component={Policy} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register" component={Login} />
    </Switch>
  </Router>
);

export default App;
