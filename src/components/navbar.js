import "./navbar.css";

export default function Navbar() {
  return (
    <div className=" py-2 px-4 lg:px-8 lg:py-4 navbar-height flex  items-center ">
      <div className="flex-1">
        <a className="">infenito</a>
      </div>
      <div className="flex-none navbar-btn">
        <ul className="flex items-center p-0">
          <li className="margin-right">
            <a>home</a>
          </li>
          <li className="margin-right">
            <a>portfolio</a>
          </li>
          <li className="margin-right">
            <a>portfolio</a>
          </li>
          <li className="margin-right">
            <a>about us</a>
          </li>
          <li className="margin-right">
            <a>pricing</a>
          </li>
          <li className="margin-right-icon">
            <a>
              <div className="arrow-container">
                <div className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="22"
                    fill="none"
                    viewBox="0 0 16 22"
                  >
                    <path
                      fill="#FFC0FE"
                      d="M15.305 6.94l-6-6a1.5 1.5 0 00-2.121 0l-6 6a1.5 1.5 0 102.12 2.12l3.44-3.44V20a1.5 1.5 0 003 0V5.62l3.44 3.44a1.5 1.5 0 002.12-2.12z"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
