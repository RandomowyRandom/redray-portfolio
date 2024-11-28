import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-surface shadow-sm z-50 dark:bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
          <Link to="/" className="text-xl font-bold text-text-primary dark:text-white">
            Dominik Konik
          </Link>
          <div className="flex flex-wrap gap-4 md:gap-0 md:items-center md:ml-auto md:space-x-8">
            <Link 
              to="/" 
              className="text-text-secondary hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-text-secondary hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="text-text-secondary hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="text-text-secondary hover:text-primary-500 dark:text-neutral-200 dark:hover:text-primary-400 transition"
            >
              Contact
            </Link>
            <div className={`${!isHomePage ? 'hidden md:block' : ''}`}>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 