import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav>
      <Link id="homePage"className="link" to="/">Home</Link> <Link id="episodesPage" className="link" to="/Episodes">Episodes</Link> <Link id="charactersPage" className="link" to="/Characters">Characters</Link>
    </nav>
  )
}

export default Navbar
