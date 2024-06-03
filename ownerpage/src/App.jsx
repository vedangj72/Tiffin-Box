import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navigator from './Navigation/Navigator';
import Addmenu from './Component/Menu/AddMenu';
import ViewFeedback from './Component/Feedback/ViewFeedback';
import UserAdd from './Component/Add member/UserAdd';
import Updates from './Component/Notification/Updates';
import Test from './Component/test';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} /> 
        <Route path='/menu' element={<Addmenu/>}/>
        <Route path='/feedback' element={<ViewFeedback/>} />
        <Route path='/adduser'element={<UserAdd/>}/>
        <Route path='/update'element={<Updates/>}/>
        <Route path='/test' element={<Test/>}/>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
