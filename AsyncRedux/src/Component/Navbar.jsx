import { Link, Route, Routes } from 'react-router-dom'
import NewCount from './NewCount'

const navlinks = [
  {
    id: 1,
    link: 'Home',
  },
  {
    id: 2,
    link: 'About',
  },
  {
    id: 3,
    link: 'Contact',
  },
]

export default function Navbar() {
  const handleNavLink = () => {}

  return (
    <div className="flex gap-4 bg-teal-500 p-4 font-semibold">
      {navlinks.map((p) => (
        <Link to={`${p.link}`} key={p.id} onClick={handleNavLink}>
          {p.link}
        </Link>
      ))}
    </div>
  )
}
