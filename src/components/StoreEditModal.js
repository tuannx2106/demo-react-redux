import React, { Component } from 'react'

class StoreEditModal extends Component {
  render() {
    return (
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
                    <input type="text" name="input1" placeholder="Name" className="form-control w-full" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input2">Address</label>
                    <div className="form-inline">
                      <input type="text" name="input2" className="form-control form-inline-item" />
                      <select className="form-control form-inline-item">
                        <option>1</option>
                      </select>
                      <select className="form-control form-inline-item">
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
    )
  }
}

export default StoreEditModal