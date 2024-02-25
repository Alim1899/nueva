import classes from './About.module.css'
import Navbar from '../../Navbar/Navbar'
const About = () => {
  return (
    <div>
    <Navbar/>
      <div className={classes.about}>
        <h1>ABOUT PAGE</h1>
      </div>
    </div>
  )
}

export default About
