import classes from './Home.module.css'
import Navbar from '../../Navbar/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className={classes.home}>
        <h1>HOME PAGE</h1>
      </div>
    </div>
  )
}

export default Home
