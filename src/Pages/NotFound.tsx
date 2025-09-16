export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-2xl  font-medium text-gray-900 mb-4">
            Sorry, this page isn't available.
          </h1>
          <p className=" text-base pt-5">
            The link you followed may be broken, or the page may have been
            removed. 
            <a
              href="/"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
               Go back to Instagram.
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-gray-500 mb-4">
            <a href="#" className="hover:text-gray-700 transition-colors">
              Meta
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Blog
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Jobs
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Help
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              API
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Locations
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Instagram Lite
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Meta AI
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Meta AI Articles
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Threads
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Contact Uploading & Non-Users
            </a>
            <a href="#" className="hover:text-gray-700 transition-colors">
              Meta Verified
            </a>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <span>English</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span>© 2025 Instagram from Meta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
