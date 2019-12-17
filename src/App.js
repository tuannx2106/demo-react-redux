import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <figure className="card__image">
            <img src="/img_logo-default.png" alt="store logo" className="w-full" />
          </figure>
          <div className="card__body">
            <div className="card__block">
              <h3>STORE INFO</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>K.O.I Thé.</td>
                  </tr>
                  <tr>
                    <th>Company Name:</th>
                    <td>K.O.I Thé. K.O.I Thé. K.O.I Thé. K.O.I Thé. K.O.I Thé.</td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>K.O.I Thé.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card__block">
              <h3>RED INVOICE INFO</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>K.O.I Thé.</td>
                  </tr>
                  <tr>
                    <th>Company Name:</th>
                    <td>K.O.I Thé. K.O.I Thé. K.O.I Thé. K.O.I Thé. K.O.I Thé.</td>
                  </tr>
                  <tr>
                    <th>Name:</th>
                    <td>K.O.I Thé.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button className="btn btn--primary card__action">Edit Profile</button>
        </div>
      </div>

      <div className="modal">
        <div className="modal__header">
          <h3>EDIT STORE PROFILE</h3>
        </div>
        <div className="modal__body">
          <form className="form">
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <h3>STORE IMAGE</h3>
                  <figure className="image--square">
                    <img src="/img_logo-default.png" alt="store logo" className="w-full" />
                  </figure>
                  <div className="btn-group--inline">
                    <button className="btn btn--secondary">Cancel</button>
                    <input type="file" name="store-image" />
                  </div>
                </div>
                <div className="col-7">
                  <h3>BASIC INFO</h3>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input1">Name</label>
                    <input type="text" name="input1" placeholder="Name" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input2">Address</label>
                    <div className="form-inline">
                      <input type="text" name="input2" className="form-control" />
                      <select className="form-control">
                        <option>1</option>
                      </select>
                      <select className="form-control">
                        <option>1</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
