import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="py-4 px-6 mx-auto max-w-7xl md:flex md:justify-between md:items-center lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/imprint" className="text-gray-400 hover:text-gray-500">
              <span>Imprint</span>
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-gray-500"
            >
              <span>Privacy Policy</span>
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-xs leading-5 text-center text-gray-500">
              &copy; {new Date().getFullYear()} Ibexion GmbH
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
