import Cars from "./containers/Cars";
import Home from "./containers/Home";
import Profile from "./containers/Profile";

export default 
(path) => {
    let id = '';
    if (path.includes("car")) {
      const chunks = path.split('/');
      id = chunks[2];
    }

switch (path) {
    case "/Cars":
        return <Cars/>;
    case `/Cars/${id}`:
      return <Cars carId={id}/>;
    case "/Home":
      return <Home />;
    case "/Profile":
      return <Profile />;
    default: return '404 Not Found';  
  }
};