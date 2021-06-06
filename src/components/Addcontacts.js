import React from 'react';
 const Addcontact = () => {
     return(
         <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            Add Contacts
                        </div>
                        <div className="card-body">
                            <form>
                                <label><strong> Enter Full Name : </strong> </label>
                                <input type="text" name="uname" className="form-control mb-3 border-warning" />
                                <label><strong> Enter Mobile Number : </strong> </label>
                                <input type="text" name="mobile" className="form-control border-warning" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     );
 }
 export default Addcontact;