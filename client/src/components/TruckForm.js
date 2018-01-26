import React from "react";


//database info renders here
const TruckForm = props =>
  <div className="container">

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">

          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-truck" aria-hidden="true"></i> Truck Info
              </strong>
            </h3>
          </div>
          
          <div className="panel-body">

            <form action="/submit" method="post">
              <div className="form-group">
                <label htmlFor="name">Truck Name</label>
                <input onChange={props.handleNameChange} type="text" className="form-control" id="name" aria-describedby="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="image">Truck Image</label>
                <input onChange={props.handleImageChange} type="text" className="form-control" id="image"/>
              </div>
              <div className="form-group">
                <label htmlFor="end-time">Rating</label>
                <input onChange={props.handleRatingChange} type="text" className="form-control" id="rating" />
              </div>
              <div className="form-group">
                <label htmlFor="owner">Owner</label>
                <input onChange={props.handleOwnerChange} type="text" className="form-control" id="owner"/>
              </div><div className="form-group">
                <label htmlFor="end-time">Description</label>
                <input onChange={props.handleDescriptionChange} type="text" className="form-control" id="rating"/>
              </div>
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>

  </div>


export default TruckForm;
