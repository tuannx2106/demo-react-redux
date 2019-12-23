import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editStore } from '../actions'

const mapStateToProps = state => ({
  currentStore: state.currentStore
})

const mapDispatchToProps = dispatch => ({
  editStore: store => { dispatch(editStore(store)) }
})

class StoreEditModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      tmpStore: {
        logoUrl: '',
        name: '',
      }
    }
  }

  handleInputStoreChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { id, logoUrl, name, address, phone, redInvoice } = this.props.currentStore
    const { isActive, onCLickCloseModal, editStore } = this.props

    return (
      <div className={`modal + ${isActive ? 'is-active' : ''}`}>
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
                    <button className="btn btn--secondary">Remove</button>
                    <input type="file" name="store-image" />
                  </div>
                </div>

                <div className="col-7">
                  <h3>BASIC INFO.</h3>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input1">Name</label>
                    <input type="text" name="name" placeholder="Name" className="form-control w-full" onChange={this.handleInputStoreChange} value={name} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input2">Store Address</label>
                    <div className="form-inline">
                      <input type="text" name="address" className="form-control form-inline-item" />
                      <select name="district" className="form-control form-inline-item" defaultValue="">
                        <option value="">District</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <select name="city" className="form-control form-inline-item" defaultValue="">
                        <option value="">City</option>
                        <option value="1">HCM</option>
                        <option value="2">HN</option>
                        <option value="3">VT</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input1">Phone #</label>
                    <input type="text" name="phone" placeholder="Name" className="form-control w-full" />
                  </div>

                  <h3>RED INVOICE INFO.</h3>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input1">Company Name</label>
                    <input type="text" name="name" placeholder="Name" className="form-control w-full" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input2">Company Address</label>
                    <div className="form-inline">
                      <input type="text" name="address" className="form-control form-inline-item" />
                      <select name="district" className="form-control form-inline-item" defaultValue="">
                        <option>District</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <select name="city" className="form-control form-inline-item" defaultValue="">
                        <option>City</option>
                        <option value="1">HCM</option>
                        <option value="2">HN</option>
                        <option value="3">VT</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input1">MST</label>
                    <input type="text" name="taxCode" placeholder="Name" className="form-control w-full" />
                  </div>
                  <button className="btn btn--default w-full">Save</button>
                  <button className="btn btn--secondary w-full" onClick={onCLickCloseModal}>Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreEditModal)