import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Navigator from './components/Navigation/Navigation';
import Login from './components/forms/Login/Login';
import Home from './view/Home/Home';
import FeedbackForm from './components/forms/FeedbackForm/FeedbackForm';
import UserAdd from './components/forms/User/UserAdd';
import Protected from './components/Protected/Protected';
import NavigationOwner from './components/Owner/NavigationOwner';
import ViewFeedback from './components/Owner/ViewFeedback';
import Addmenu from './components/forms/Addmenu/Addmenu';
import Menu from './view/Menu.jsx/Menu';
import Absenty from './view/Home/Absenty';
import User from './components/Owner/User';
import Updates from './components/Owner/Updates';
import UserProfil from './view/Home/UserProfil';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navigator />}>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Protected Component={Home} />} />
            <Route path="/userid/:id" element={<Protected Component={UserProfil} />} />
            <Route path="/absenty/:id" element={<Protected Component={Absenty} />} />
            {/* <Route path='/subscription/:id' element={<Protected Component={Subscription} />} /> */}
            <Route path="/menu" element={<Protected Component={Menu} />} />
            <Route path="/feedbackform" element={<Protected Component={FeedbackForm} />} />
            <Route path="/ownerPage" element={<NavigationOwner />}>
                <Route path="userAdd" element={<UserAdd />} />
                <Route path="seeFeedback" element={<ViewFeedback />} />
                <Route path="addMenu" element={<Addmenu />} />
                <Route path="allusers" element={<User />} />
                <Route path="allupdates" element={<Updates />} />
            </Route>
        </Route>
    )
);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
