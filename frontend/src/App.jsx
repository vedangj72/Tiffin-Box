import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import FeedbackForm from './components/forms/FeedbackForm';
import {createBrowserRouter,RouterProvider, createRoutesFromElements,Routes,Route}from 'react-router-dom';
import Navigator from './components/Navigation/Navigation';
import Login from './components/forms/Login/Login';
import Home from './view/Home/Home';
// import Feedback from './view/feedback/Feedback';
import FeedbackForm from './components/forms/FeedbackForm/FeedbackForm';
import UserAdd from './components/forms/User/UserAdd';
import Protected from './components/Protected/Protected';
import NavigationOwner from './components/Owner/NavigationOwner';
import ViewFeedback from './components/Owner/ViewFeedback';
import Addmenu from './components/forms/Addmenu/Addmenu';
import Menu from './view/Menu.jsx/Menu';
import Absenty from './view/Home/Absenty';



function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navigator/>}>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Protected Component={ Home}/>}></Route>
       <Route path='/absenty' element={<Protected Component={ Absenty}/>}></Route>
      <Route path='/menu' element={<Protected Component={ Menu}/>}></Route>
      <Route path='/feedbackform' element={<Protected Component={FeedbackForm}/>}></Route>
      <Route path='/ownerPage' element={<NavigationOwner/>}>
        <Route path='userAdd' element={<UserAdd/>}></Route> 
        <Route path='seeFeedback' element={<ViewFeedback/>}></Route> 
        <Route path='addMenu' element={<Addmenu/>}></Route> 
      </Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Routes >
          <Route path="/" element={<Navigator/>} ></Route>
        </Routes>
      </RouterProvider>
    </div>
  );
}

export default App;
