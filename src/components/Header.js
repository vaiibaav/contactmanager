import React from 'react';
 const header = () => {
     return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand text-center" href="#">Contacts Management System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/index">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">All Contact</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
     );
 }

 export default header;