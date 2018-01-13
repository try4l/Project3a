import React from "react";

const Search = props =>
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
            <form>
              <div className="form-group">
                <label htmlFor="topic">Truck</label>
                <input onChange={props.handleTopicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="start-time">Opening Time</label>
                <input onChange={props.handleStartYearChange} type="text" className="form-control" id="start-year" />
              </div>
              <div className="form-group">
                <label htmlFor="end-time">Closing Time</label>
                <input onChange={props.handleEndYearChange} type="text" className="form-control" id="end-year" />
              </div>
              <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>

            <form>
              <div className="form-row justify-content-center">
                <div className="col">
                </div>    
                <div className="col">
                  <input type="text" className="form-control" placeholder="Truck Name"/>
                </div>
                <div className="col">
                </div>
              </div>

            <div> <br/> <hr/> <br/></div>
       
              <div className="form-row">
                <div className="col">
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Day"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Start Time"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="End Time"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Latitude"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Longitude"/>
                </div>
                <div className="col">
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>

    <br/><br/>

    <div className="row">
      <div className="col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong>
                <i className="fa fa-truck" aria-hidden="true"></i> Results
              </strong>
            </h3>
          </div>
          <div className="panel-body">
            {props.renderTrucks()}
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
  </div>


export default Search;
