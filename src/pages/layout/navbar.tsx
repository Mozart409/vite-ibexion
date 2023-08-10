import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

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
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
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
              <div className="flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0 sm:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex relative text-sm bg-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pr-4 pl-3 text-base font-medium text-indigo-700 bg-indigo-50 border-l-4 border-indigo-500"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pr-4 pl-3 text-base font-medium text-gray-500 border-l-4 border-transparent hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pr-4 pl-3 text-base font-medium text-gray-500 border-l-4 border-transparent hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pr-4 pl-3 text-base font-medium text-gray-500 border-l-4 border-transparent hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
