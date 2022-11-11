import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Rightbar from '../components/rightbar/Rightbar'
import "./home.css"
import Share from '../components/share/Share'
function Home(props) {
  return (
    <>
      <div className="homeContainer">
      <Sidebar/>
      <Share users={props.usrs}/>
      <Rightbar/>
      </div>
    </>
  )
}

export default Home