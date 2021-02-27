import styles from '../styles/Home.module.css'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Homepage from './pages/Homepage'

export default function Home() {
  return (
    <>
    <Router>
      <Route exact path="/" component={Homepage}/>
    </Router>
    </>
  )
}
