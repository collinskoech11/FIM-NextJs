import React from 'react';
import Navbar from '../components/Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Homepage from './Instances/Homepage';
import CustomFooter from '../components/CustomFooter';
import AboutPage from './Instances/AboutPage';
import ContactUs from './Instances/ContactUs';
import Location from './Instances/Location';
import AinamoiNoth from './Instances/branches/AinamoiNoth';
import Changoi from './Instances/branches/Changoi';
import Kericho from './Instances/branches/Kericho';
import Kipkelion from './Instances/branches/Kipkelion';
import Kuresoi from './Instances/branches/Kuresoi';
import Litein from './Instances/branches/Litein';
import Londiani from './Instances/branches/Londiani';
import Makimeny from './Instances/branches/Makimeny';
import Marishoni from './Instances/branches/Marishoni';
import Nandi from './Instances/branches/Nandi';
import Nakuru from './Instances/branches/Nakuru';
import Transmara from './Instances/branches/Transmara';
import Bomet from './Instances/branches/Bomet';
import Live from './Instances/Live';
import JustFm from './Instances/JustFm';
import ContactDev from './Instances/ContactDev';
import Bishop from './Instances/SuperProfiles/Bishop';


export default function Home() {
  return (
    <Router>
    <div className="app">
     <Navbar/>
     <Route exact path="/" component={Homepage}/>
     <Route path="/AboutPage" component={AboutPage}/>
     <Route path="/ContactUs" component={ContactUs}/>
     <Route path="/Location" component={Location}/>
     <Route path="/ContactDev" component={ContactDev}/>
     
     
     
     {/*Profiles*/}
     <Route path="/SuperProfiles/Bishop" component={Bishop}/>
     

     {/*Branches screens */}
     <Route path="/branches/AinamoiNoth" component={AinamoiNoth}/>
     <Route path="/branches/Changoi" component={Changoi}/>
     <Route path="/branches/Kericho" component={Kericho}/>
     <Route path="/branches/Kipkelion" component={Kipkelion}/>
     <Route path="/branches/Kuresoi" component={Kuresoi}/>
     <Route path="/branches/Litein" component={Litein}/>
     <Route path="/branches/Londiani" component={Londiani}/>
     <Route path="/branches/Makimeny" component={Makimeny}/>
     <Route path="/branches/Marishoni" component={Marishoni}/>
     <Route path="/branches/Nandi" component={Nandi}/>
     <Route path="/branches/Nakuru" component={Nakuru}/>
     <Route path="/branches/Transmara" component={Transmara}/>
     <Route path="/branches/Bomet" component={Bomet}/>
     
     {/**Live servce */}
     <Route path="/Live" component={Live}/>

     {/**Facebook */}
     <Route path="/JustFm" component={JustFm}/>


    </div>
    <CustomFooter/>
    </Router> 
  )
}
