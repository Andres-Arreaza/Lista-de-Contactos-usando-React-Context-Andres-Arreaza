import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contact = ({ id, name, phone, email, address }) => {
    const { actions } = useContext(Context);
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: "904px" }}>
                <div className="contact-actions">
                    <Link to={`/edit/${id}`} className="btn btn-white">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button type="button" className="btn btn-white" data-bs-toggle="modal" data-bs-target={`#exampleModal${id}`}>
                        <i className="fas fa-trash-can"></i>
                    </button>
                    <div className="modal fade" id={`exampleModal${id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${id}`} aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id={`exampleModalLabel${id}`}>Are you sure!</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this thing the entire universe will go down!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                                    <button onClick={() => actions.deleteContact(id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes, baby!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <img src="https://avatars.githubusercontent.com/u/112995166?v=4"
                        className="img-fluid rounded-circle" alt="..." style={{ width: "130px", height: "130px" }} />
                    <div className="contact-details">
                        <div className="contact-info">
                            <i className="fa-solid fa-phone-flip me-2"></i>
                            <p className="card-text">{phone}</p>
                        </div>
                        <div className="contact-info">
                            <i className="fa-solid fa-envelope me-2"></i>
                            <p className="card-text">{email}</p>
                        </div>
                        <div className="contact-info">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            <p className="card-text">{address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
