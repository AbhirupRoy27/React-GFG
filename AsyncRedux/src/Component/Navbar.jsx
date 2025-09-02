import { Link, Route, Routes } from 'react-router-dom'
import NewCount from './NewCount'

const navlinks = [
  {
    id: 1,
    name: 'Home',
    link: '',
  },
  {
    id: 2,
    name: 'About',
    link: 'About',
  },
  {
    id: 3,
    name: 'Contact',
    link: 'Contact',
  },
  {
    id: 4,
    name: 'Async-REDUX',
    link: 'Redux-async',
  },
  {
    id: 5,
    name: 'Break',
    link: 'brocken-link',
  },
]

export default function Navbar() {
  const handleNavLink = () => {}

  return (
    <div className="flex gap-4 bg-teal-500 p-4 font-semibold">
      {navlinks.map((p) => (
        <Link to={`${p.link}`} key={p.id} onClick={handleNavLink}>
          {p.name}
        </Link>
      ))}
    </div>
  )
}
