import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SchoolData.css"; // Import custom styles
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loadCurrentAdminAction from "../../Redux/Admin/Actions/loadCurrentAdminAction.Admin";
import loadCurrentTeacherAction from "../../Redux/Teacher/Actions/loadCurrentTeacherAction.Teacher";
import loadCurrentStudentAction from "../../Redux/Student/Actions/loadCurrentStudentAction.Student";
import { toast } from "react-toastify"; // Assuming you're using react-toastify for notifications
import { handleShowFailureToast } from "../../ToastMessages/ToastMessage";

import { Oval } from "react-loader-spinner"; // Import loader

import Logo from "../../../Assets/school.png";
import e1 from "../../../Assets/sc1.webp";
import e2 from "../../../Assets/ad1.webp";
import e3 from "../../../Assets/ex.webp";
import e4 from "../../../Assets/ss.webp";
import e5 from "../../../Assets/a1.png";
import e6 from "../../../Assets/t1.png";
import e7 from "../../../Assets/s1.webp";
import e8 from "../../../Assets/uniform.webp";
import e9 from "../../../Assets/books.webp";
import e10 from "../../../Assets/ssss.webp";

const services = {
  "Our Partners": [
    { name: "All Schools and Academies Collaborations", img: e1 },
    { name: "Admission For All", img: e2 },
    { name: "Board Papers", img: e3 },
    { name: "Syllabus Grade 1-10", img: e4 },
  ],
  "Portal": [
    { name: "Administration", img: e5 },
    { name: "Teachers", img: e6 },
    { name: "Students", img: e7 },
  ],
  "School Store": [
    { name: "Uniform", img: e8 },
    { name: "Books", img: e9 },
    { name: "Stationary", img: e10 },
  ]
};

const SchoolData = () => {
  const [admins, setAdmins] = useState([]);
  const [displayAdmin, setDisplayAdmin] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentAdminData } = useSelector((state) => state.currentAdminData);
  const { currentTeacherData } = useSelector((state) => state.currentTeacherData);
  const { currentStudentData } = useSelector((state) => state.currentStudentData);

  useEffect(() => {
    dispatch(loadCurrentAdminAction());
    dispatch(loadCurrentTeacherAction());
    dispatch(loadCurrentStudentAction());
  }, [dispatch]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/load-all-admins");
        setAdmins(response.data.data);
      } catch (error) {
        toast.error("Failed to load admins");
      }
    };

    fetchAdmins();
  }, []);

  useEffect(() => {
    const userRoleData = currentAdminData?.admin || currentTeacherData?.teacher || currentStudentData?.student;

    if (userRoleData && (currentTeacherData || currentStudentData)) {
      const matchedAdmin = admins.find(admin => admin._id === userRoleData.adminId);
      if (matchedAdmin) {
        setDisplayAdmin(matchedAdmin);
      }
    } else if (currentAdminData) {
      setDisplayAdmin(currentAdminData.admin);
    }
  }, [admins, currentAdminData, currentTeacherData, currentStudentData]);

  const handleLogout = async() => {
    try {
      const response = await axios.get("https://belikeerp-3.onrender.com/api/v1/admin/logout");
      console.log(response.data.message);
      navigate("/");
    } catch (error) {
      handleShowFailureToast(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="m-24 bg-gradient-to-r from-blue-400 to-green-500">
      {displayAdmin ? (
        <div className="mb-4 bg-white d-flex justify-content-between align-items-center ">
          <img
            alt="Admin Avatar"
            className="p-8 admin-avatar ms-lg-2"
            src={displayAdmin.adminAvatar || "/default-avatar.png"}
            style={{ height: "200px", width: "200px" }} // Adjust as needed
          />
          <div className="flex-col items-center justify-center p-8 d-flex">
            <h1 className="text-5xl font-bold text-black admin-heading">{displayAdmin.adminName}</h1>
            <a
              className="text-xl font-semibold text-green-300 admin-heading"
              href={displayAdmin.locationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to School
            </a>
            <p className="font-semibold text-black text-md">Address: {displayAdmin.address}</p>
          </div>

          <div className="flex flex-col items-start gap-4 p-8">
            <NavLink
              to="/all-schools-and-academies-collaborations"
              className="px-6 py-2 font-semibold text-white transition duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-600"
            >
              Go to Profile
            </NavLink>
            <p className="text-lg font-semibold text-gray-700">
              Contact: {displayAdmin.contactNumber}
            </p>
            <button
              onClick={handleLogout}
              className="px-6 py-2 mt-4 font-semibold text-white transition duration-300 ease-in-out bg-red-500 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center bg-white rounded-lg shadow-lg login-section">
          <h1 className="mb-6 text-4xl font-bold text-black">Welcome to Belike Group</h1>
          <p className="mb-6 text-lg text-black">Please log in to access the school portal</p>
          <NavLink
            to="/admin-login"
            className="px-6 py-2 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
          >
            Login as Admin
          </NavLink>
        </div>
      )}

      {Object.entries(services).map(([heading, blocks]) => (
        <div key={heading} className=" service-section">
          <h3 className="text-center fw-bold service-heading">{heading}</h3>
          <div className="services-grid">
            {blocks.map((service) => (
              <div key={service.name} className=" service-card">
                <NavLink
                  className="text-center text-reset text-decoration-none"
                  to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="mb-3 medical-img-container">
                    <img
                      src={service.img}
                      alt={`${service.name} Logo`}
                      className="h-32 service-img" // Adjust size here
                    />
                  </div>
                  <h1 className="service-name">{service.name}</h1>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}

      {!displayAdmin && (
        <section>
          <div
            className="ccw_plugin chatbot"
            style={{
              bottom: "20px",
              right: "20px",
            }}
          >
            <div className="style4 animated no-animation ccw-no-hover-an">
              <a
                className="nofocus"
                href="https://api.whatsapp.com/send?phone=+923475800705&text=Hi, I’m reaching out through Belike!"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <div
                  className="chip style-4 ccw-analytics"
                  data-ccw="style-4"
                  id="style-4"
                  style={{
                    backgroundColor: "#25D366",
                    borderRadius: "100%",
                    color: "white !important",
                    fontSize: "20px",
                    padding: "18px 20px 15px 20px",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  <i
                    aria-hidden="true"
                    className="fa fa-whatsapp"
                    style={{
                      fontSize: "36px",
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SchoolData;
