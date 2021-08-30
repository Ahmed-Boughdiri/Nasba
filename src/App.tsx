import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { 
  Home, 
  Product, 
  Policy, 
  Delivery, 
  Cart
} from "screens";

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/policy" component={Policy} />
      <Route exact path="/delivery" component={Delivery} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </Router>
);

export default App;
