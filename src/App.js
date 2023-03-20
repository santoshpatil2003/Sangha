import './App.css';
import LogIn from './components/LogIn';
import React, {useState , useEffect, useRef} from 'react'
// import {
//   createBrowserRouter,
// } from "react-router-dom";
import {
    // createBrowserRouter,
    BrowserRouter,
    // RouterProvider,
    Route,
    // Link,
    Routes
  } from "react-router-dom";
import SignUp from './components/SignUp';
import Community from './components/community';
import CommunitySignUp from './components/CommunitySignUp';
import InsideHome from './components/InsideHome';
// import { auth } from "./components/Firebase";
// import { onAuthStateChanged } from "firebase/auth";
import Navbar from './components/Navbar';
import ProfileDp from './components/ProfileDp';
import UserProfileRight from './components/UserProfileRight';
import UserProfileMiddle from './components/UserProfileMiddle';
import SanghaProfileMiddle from './components/SanghaProfileMiddle';
import ProfileComponent from './components/ProfileComponent';
import Settings from './components/Settings';
// import {getDoc,doc} from "firebase/firestore";
// import { db } from "./components/Firebase";
import Settingsuser from './components/Settingsuser';
import { getuser } from './components/profiledata';
// import ReactCircularLoader from 'react-circular-loader/dist';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import {data} from './profiledata';
// import {docsnap} from './profiledata';

// let docsnap;
// let list = [];
// var data = useRef();

// console.log(list);

// if (data !== null) {
//   console.log("Document data:", data);
// } else {
//   console.log("No such document!");
// }

let profilecomponent = '';
let Profiledp = '';
let userprofileright = '';
let userprofilemiddle= '';
let sanghaprofilemiddle = '';
let sanghaprofileright = '';
let settings = '';
let navbar = '';
// let settings2 = '';





// const profilecomponent = (<ProfileComponent profilename = 'Santosh Patil' profileid = 'Santoshpatil2003'></ProfileComponent>);
// const Profiledp = (<ProfileDp name='Santosh Patil' nameid = 'Santoshpatil2003'/>);
// const userprofileright = (<UserProfileRight title = 'Messeges'/>);
// const userprofilemiddle = (<UserProfileMiddle name = 'Santosh patil' nameid = 'SantoshPatil2003'/>);
// const sanghaprofilemiddle = (<SanghaProfileMiddle name = 'Beerbiceps' nameid = 'Ranveer Allahbadia'/>)
// const sanghaprofileright = (<UserProfileRight inside = {profilecomponent} title = 'Members'/>);
// const settings = (<Settings></Settings>);
// const profilecomponent = (<ProfileComponent></ProfileComponent>);

// (<SanghaProfileMiddle name = 'Beerbiceps' nameid = 'Ranveer Allahbadia'/>)
// const u = auth.currentUser;
// console.log(u + "hi");



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <App></App>
//     ),
//   },
//   {
//     path: "signup",
//     element: (
//       <SignUp></SignUp>
//     ),
//   },
//   {
//     path: "community",
//     element: (
//       <Community></Community>
//     ),
//   },
//   {
//     path: "/community/communitysignup",
//     element: (
//       <CommunitySignUp></CommunitySignUp>
//     ),
//   },
//   {
//     path: "/userprofile",
//     element: (
//       <InsideHome dataright = {userprofileright} datamiddle = {userprofilemiddle} lists = {false}></InsideHome>
//     ),
//   },
//   {
//     path: "/Sanghaprofile",
//     element: (
//       <InsideHome dataright = {sanghaprofileright} datamiddle = {sanghaprofilemiddle} lists = {false}></InsideHome>
//     ),
//   },
//   {
//     path: "/SanghaSettings",
//     element: (
//       <InsideHome datamiddle = {settings} dataright = {Profiledp} lists = {true}></InsideHome>
//     ),
//   },
// ]);

function App() {
  let data1 = useRef();
  let [user, userdata] = useState();
  let [id, userid] = useState(null);
  let [circle, loading] = useState(true);


    useEffect( () => {
      getuser(user,data1,userdata,id,userid);
    }, []);

    try{
      // console.log(user['name']);
       profilecomponent = (<ProfileComponent profilename = 'Santosh Patil' profileid = 'Santoshpatil2003'></ProfileComponent>);
       Profiledp = (<ProfileDp picurl = {user['picurl']} name = {user['Sangha'] === true? user['sanghaname']:user['name']} sangha = {user['Sangha']}   nameid = {user['username']}/>);
       userprofileright = (<UserProfileRight title = 'Messeges'/>);
       userprofilemiddle = (<UserProfileMiddle name = {user['Sangha'] === true? user['sanghaname']:user['name']} nameid = {user['username']} />);
       sanghaprofilemiddle = (<SanghaProfileMiddle name = {user['Sangha'] === true? user['sanghaname']:user['name']} sangha = {user['Sangha']} nameid = {user['username']}/>);
       sanghaprofileright = (<UserProfileRight inside = {profilecomponent} title = 'Members'/>);
       settings = (user['Sangha'] === true? <Settings picurl = {user['picurl']} name = {user['sanghaname']}></Settings>: <Settingsuser picurl = {user['picurl']} name = {user['name']}></Settingsuser>);
       navbar = (<Navbar searchp = {profilecomponent} picurl = {user['picurl']}></Navbar>);
      //  settings2 = (<Settingsuser></Settingsuser>);
    } catch(e){
      console.log("error");
    }
    // console.log(id);

    if(id !== null){
      return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<InsideHome navbar = {navbar} datamiddle = {null} dataright = {Profiledp} lists = {true}></InsideHome>}/>
              <Route path='signup' element={<SignUp></SignUp>}/>
              {/* <Route path='community' element={<Community></Community>}/>
              <Route path='/community/communitysignup' element={<CommunitySignUp></CommunitySignUp>}/> */}
              <Route path='/userprofile' element={<InsideHome navbar = {navbar} dataright = {userprofileright} datamiddle = {userprofilemiddle} lists = {false}></InsideHome>}/>
              <Route path='/Sanghaprofile' element={<InsideHome navbar = {navbar} dataright = {sanghaprofileright} datamiddle = {sanghaprofilemiddle} lists = {false}></InsideHome>}/>
              <Route path='/SanghaSettings' element={<InsideHome navbar = {navbar} datamiddle = {settings} dataright = {Profiledp} lists = {true}></InsideHome>}/>
            </Routes> 
        </BrowserRouter>
        // <div className="App">
        //       <InsideHome datamiddle = {null} dataright = {Profiledp} lists = {true}></InsideHome>
        //   </div>
          );
    }else if(id === null && circle === true){
      if(id === null && circle === false){
        return (
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<div className="App"><LogIn></LogIn></div>}/>
                <Route path='community' element={<Community></Community>}/>
                <Route path='/community/communitysignup' element={<CommunitySignUp></CommunitySignUp>}/>
            </Routes>
          </BrowserRouter>
          );
      }else if(circle === true){
        try{
          return (
            <div className='app'>
              <div className='bar' style={{ width: 50, height: 50 }}>
                <CircularProgressbar  value={100} text={`${100}%`} />
              </div>
              
              {/* <ReactCircularLoader primaryColor="#0D47A1" 
                  secondaryColor="#e8f4f8" 
                  diameter="100px" 
                  primaryWidth="3px" 
                  secondaryWidth="5px"></ReactCircularLoader> */}
            </div>
          );
        } catch (e){
          console.log(e);
        };
      }
    }
}

export default App;
// export {router};
