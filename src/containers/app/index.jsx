import Content from "../../components/content";
import  Header  from "../../components/header";
import Footer from "../../components/footer";
import {Layout} from "antd";
//import routes from "../../routes.jsx";

function App() {

  
    return (
      <Layout className="app-layout">
        <Header />
        <Layout>
        
         <Content></Content>
        </Layout>
        <Footer/>

      </Layout>
      

    );
  }
  
  export default App;