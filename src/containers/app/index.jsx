import {useState} from "react";
import Content from "../../components/content";
import  Header  from "../../components/header";
//import Footer from "../../components/footer";
import {Layout} from "antd";
import routes from "../../routes.jsx";


const renderRoutes = (route) => {
  if (route === "/profile") {
    return { ...routes, "/profile": "No acces for you" };
  }

  return routes;
};
function App() {
    const [path, setPath] = useState("/cars");
  
    const onMenuClick = ({ item }) => {
      const _path = item.props?.path;
      console.log(_path);
      setPath(_path);
    };
  
    return (
      <Layout className="app-layout">
        <Header />
        <Layout>
          <Header onMenuClick={onMenuClick} />
          <Content>{renderRoutes(path)[path]}</Content>
        </Layout>
      </Layout>
    );
  }
  
  export default App;