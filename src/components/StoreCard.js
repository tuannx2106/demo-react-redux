import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  currentStore: state.currentStore
})

class StoreCard extends Component {
  render() {
    const { id, logoUrl, name, district, city, address, phone, redInvoice } = this.props.currentStore
    const { onCLickOpenModal } = this.props

    return (
      <div className="card">
        <figure className="card__image">
          <img src="/img_logo-default.png" alt="store logo" className='w-full' />
        </figure>
        <div className="card__body">
          <div className="card__block">
            <h3>STORE INFO</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>{`${address}, D.${district}, ${city}`}</td>
                </tr>
                <tr>
                  <th>Phone #:</th>
                  <td>{phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card__block">
            <h3>RED INVOICE INFO</h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Company Name:</th>
                  <td>{redInvoice.name}</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>{redInvoice.address}</td>
                </tr>
                <tr>
                  <th>MST:</th>
                  <td>{redInvoice.taxCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn btn--default card__action" onClick={onCLickOpenModal}>Edit Profile</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, () => { })(StoreCard)