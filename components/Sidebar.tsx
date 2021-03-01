import { useState } from 'react'
import Link from 'next/link'

type SideBarProps = {
  onChange: () => void
}

const Sidebar = ({ onChange }: SideBarProps) => {
  const [currentTheme, setCurrentTheme] = useState()
  const theme = process.browser ? localStorage.theme : ''

  const switchTheme = () => {
    onChange()
    setCurrentTheme(theme)
  }

  return (
    <div className="sidebar flex flex-col justify-between items-center w-24 p-6 bg-gray-200 dark:bg-gray-700">
      <div className="flex flex-col space-y-4">
        <Link href="/">
          <a>
            <div className="flex items-center justify-center rounded-full border-4 border-black bg-black w-16 h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1730 1730"
                preserveAspectRatio="xMidYMid meet"
                className="logo fill-current text-zofe w-16 h-16"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 2000h2000V0H0z" />
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -470 2195)">
                  <path d="M1411.01 1031.797c0 31.913-19.147 50.075-56.457 50.075-36.823 0-56.95-18.162-56.95-50.075v-10.8h113.408z" />
                  <path d="M716.762 1134.325h388.952v17.81c0 68.147 35.787 102.463 107.852 103.934h4.417c11.763 0 15.688-3.926 15.688-15.688v-21.57c0-11.768-3.925-15.687-15.688-15.687-41.18 0-55.399-13.732-55.399-50.989v-17.81h184.367a39.83 39.83 0 003.226-.142c1.473.031 2.874.142 4.376.142 74.513 0 113.247-42.16 113.247-101.479V995.8c0-14.218-7.358-21.078-22.06-21.078h-148.058v-11c0-24.938 12.362-40.824 34.876-46.57h306.67a650.481 650.481 0 015.285 82.85c0 355.954-288.558 644.513-644.513 644.513-309.887 0-568.655-218.715-630.455-510.189z" />
                  <path d="M896.517 1081.873c-27.03-3.915-41.988-19.822-41.988-45.593v-72.558c0-29.413 20.1-46.571 55.89-46.571 35.786 0 56.376 17.158 56.376 46.57v72.559c0 25.77-15.322 41.678-42.45 45.593z" />
                  <path d="M1354.307 865.676l-.006.014c-.246-.001-.48-.014-.726-.014-76.483 0-112.762 40.689-112.762 104.91v57.85c0 20.752 3.69 38.584 10.805 53.437h-89.034V880.87c0-11.276-3.432-15.195-15.195-15.195h-25.986c-11.764 0-15.69 3.919-15.69 15.195v201.002h-91.65c6.26-13.098 9.599-28.332 9.599-45.593v-72.558c0-61.281-40.69-98.046-113.244-98.046-72.07 0-112.758 36.765-112.758 98.046v72.558c0 17.26 3.34 32.495 9.588 45.593h-69.642L604.758 917.15h123.537c11.277 0 14.706-3.92 14.706-15.197V880.87c0-11.276-3.43-15.195-14.706-15.195H547.399c-11.277 0-15.2 3.919-15.2 15.195v21.083c0 6.374 1.963 11.278 5.394 15.197l131.869 165.7H360.77a650.665 650.665 0 01-5.285-82.85c0-355.956 288.559-644.514 644.514-644.514 309.887 0 568.655 218.714 630.454 510.189z" />
                </g>
              </svg>
            </div>
          </a>
        </Link>

        <Link href="/sobre">
          <a>
            <div className="flex items-center justify-center bg-zofe rounded-full w-16 h-16">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </Link>

        <Link href="/vista">
          <a>
            <div className="flex items-center justify-center bg-zofe rounded-full w-16 h-16">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
          </a>
        </Link>

        <Link href="/contato">
          <a>
            <div className="flex items-center justify-center bg-zofe rounded-full w-16 h-16">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>

      <div className="flex flex-col space-y-4">
        <button onClick={switchTheme} className="flex items-center justify-center bg-zofe rounded-full w-16 h-16">
          {currentTheme === 'dark' ? (
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          )}
        </button>
        <Link href="/">
          <a>
            <div className="flex items-center justify-center bg-zofe rounded-full w-16 h-16">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
