import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' }
]
export const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex relative justify-between h-16">
              <div className="flex absolute inset-y-0 left-0 items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex relative justify-center items-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-500 focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center items-center sm:justify-start sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <img
                      className="w-auto h-8"
                      src="/full-text.svg"
                      alt="Ibexion GmbH"
                    />
                  </Link>
                </div>
                <div className="hidden sm:flex sm:ml-6 sm:space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center"
                    >
                      {({ isActive, isPending }) => (
                        <span
                          className={
                            isActive
                              ? ' border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'
                              : ' border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                          }
                        >
                          {item.name}
                        </span>
                      )}
                    </NavLink>
                  ))}
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {/* <a
                    href="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-indigo-500"
                  >
                    Home
                  </a> */}
                  {/* <a
                    href="/#contact-section"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300"
                  >
                    Contact
                  </a> */}
                </div>
              </div>
              <div className="flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0 sm:ml-6"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.href} className="">
                  {({ isActive, isPending }) => (
                    <Disclosure.Button
                      as="span"
                      className={
                        isActive
                          ? 'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
                          : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                      }
                    >
                      <span>{item.name}</span>
                    </Disclosure.Button>
                  )}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
