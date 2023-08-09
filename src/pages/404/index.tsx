import CustomButton from '@/components/CustomButton'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="h-screen">
      <div className="py-16 px-4 min-h-full bg-white sm:py-24 sm:px-6 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <div className="sm:flex">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:pl-6 sm:border-l sm:border-gray-200">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  An error occurred
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="flex mt-10 space-x-3 sm:pl-6 sm:border-l sm:border-transparent">
                <Link to="/">
                  <CustomButton text="Go back home." />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
