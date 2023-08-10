import { Link } from 'react-router-dom'

export default function ContactSection() {
  return (
    <div className="">
      <div className="py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <div className="overflow-hidden relative py-24 px-6 text-center bg-gray-900 border border-gray-500 shadow-2xl sm:px-16 sm:rounded-3xl isolate">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact us now!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            You are an e-bike manufacturer and interested in our components?
            Detailed information on the handling of user data can be found in
            our privacy policy. Just write us or call us.
          </p>
          <div className="flex gap-x-6 justify-center items-center mt-10">
            <a
              href="tel:0049711508878323"
              className="py-2.5 px-3.5 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-100 focus-visible:outline-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              +49 711 508878323
            </a>
            <Link
              to="/privacy-policy"
              className="text-sm font-semibold leading-6 text-white"
            >
              Privacy policy <span aria-hidden="true">→</span>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
