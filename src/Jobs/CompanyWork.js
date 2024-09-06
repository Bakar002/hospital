import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Welfares/welfare/logojob.webp"
import t1 from "../Assets/Welfares/welfare/pjob.webp"
import e2 from "../Assets/Welfares/welfare/full.webp";
// import e4 from "../Assets/Welfares/welfare/city.webp"
// import e5 from "../Assets/Welfares/welfare/company.webp"
// import e6 from "../Assets/Welfares/welfare/jobuploading].webp"
// import e7 from "../Assets/Welfares/welfare/salary.png"
// import e8 from "../Assets/Welfares/welfare/jobpost.webp"
// import e9 from "../Assets/Welfares/welfare/onlinejonb.webp"
// import e10 from "../Assets/Welfares/welfare/jobprofession.webp"



const CompanyWork= () => {
    const services = [
      
        { name: "Part Time", img: t1 },
  { name: "Full Time", img: e2 },
  
 
        
        // Add more payment methods as needed
    ];

    return (
        <div className="container ">
            <div className="mb-4 text-center d-flex justify-content-center align-items-center">
                <h1 className="medical-heading">Company-Work</h1>
                <img
                    alt="Logo"
                    className="medical-logo ms-lg-2"
                    src={Logo}
                    style={{ height: "70px", width: "70px" }}
                />
            </div>

            <div className="mt-32 services-grid">
                {services.map((service) => (
                    <div key={service.name} className="service-card">
                        <NavLink
                            className="text-center text-reset text-decoration-none"
                            to={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                            <div className="mb-3 medical-img-container">
                                <img
                                    src={service.img}
                                    alt={`${service.name} Logo`}
                                    className="service-img"
                                />
                            </div>
                            <h1 className="service-name">{service.name}</h1>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyWork;
