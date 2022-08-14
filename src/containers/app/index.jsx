import Content from "../../components/Content";
import Header  from "../../components/Header";
import Footer from "../../components/Footer";
import {Layout} from "antd";
import routes from "../../routes";
import { useAppContext } from "./context";

const renderRoutes = (path) => {
  if (path === "/dashboard") {
    return { ...routes, "/dashboard": "No acces for you" };
  }

  return routes(path);
};

function App() {

  const { path } = useAppContext();

    return (
      <Layout className="app-layout">
        <Header />
        <Layout>
         <Content>{renderRoutes(path)}</Content>
        </Layout>
        <Footer/>
      </Layout>
    );
  }
  
  export default App;