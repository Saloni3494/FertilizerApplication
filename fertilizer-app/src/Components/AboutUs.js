import "../Styles/AboutUs.css";

export default function AboutUs() {
    return (
        <div className="about-us-container flex justify-center items-center py-10 bg-gray-100">
            <div className="contact-card flex flex-wrap justify-center gap-10">
                {/* About Us Card */}
                <div className="card h-auto w-3/5 rounded-xl shadow-2xl bg-white text-gray-800 p-6">
                    <h5 className="text-left mb-4 block font-sans text-2xl font-bold tracking-wide text-teal-600">
                        ABOUT US
                    </h5>
                    <p className="text-left mb-4 block font-sans text-lg">
                        Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration.
                    </p>
                    <ul>
                        <li className="mt-4 flex items-center">
                            <i className="fa fa-phone mr-3 text-teal-600"></i>
                            <span className="text-lg">sfbkjsdbknsl</span>
                        </li>
                        <li className="mt-4 flex items-center">
                            <i className="fa fa-envelope mr-3 text-teal-600"></i>
                            <span className="text-lg">snfkbgdk</span>
                        </li>
                        <li className="mt-4 flex items-start">
                            <i className="fa-solid fa-map-pin mr-3 mt-1 text-teal-600"></i>
                            <span className="text-lg leading-tight">
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Branding & Collaboration Card */}
                <div className="card h-auto w-96 rounded-xl shadow-2xl bg-white text-gray-800 p-6">
                    <h5 className="text-center mb-4 block font-sans text-2xl font-bold tracking-wide text-teal-600">
                        Adding additional info
                    </h5>
                    <ul className="text-center">
                        <li className="mt-4 flex items-center justify-center">
                            <i className="fa fa-handshake mr-3 text-teal-600"></i>
                            <span className="text-lg">sbfjsfsknlk;sfsdbk</span>
                        </li>
                        <li className="mt-4 flex items-start justify-center">
                            <i className="fa-solid fa-map-pin mr-3 mt-1 text-teal-600"></i>
                            <span className="text-lg leading-tight">
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            Our site aims to provide valuable insights and resources for developers and tech enthusiasts, fostering a community of learning and collaboration
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}