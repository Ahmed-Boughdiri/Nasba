import { 
    Page, 
    Navbar,
    Caption,
    Banner,
    ShopSection,
    Footer
} from "components";
import { RouteComponentProps } from "react-router";

const Home:React.FC<RouteComponentProps> = ({ history }) =>(
    <Page>
        <Navbar />
        <Caption />
        <Banner />
        <ShopSection history={history} />
        <Footer />
    </Page>
);

export default Home;
