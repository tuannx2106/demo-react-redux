import React, { Component } from 'react';
import './App.scss';
import StoreCard from './components/StoreCard'
import StoreEditModal from './components/StoreEditModal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalEditProfileOpen: false
    }
  }

  onCLickOpenModal = e => {
    this.setState({ isModalEditProfileOpen: true })
  }

  onCLickCloseModal = e => {
    e.preventDefault()
    this.setState({ isModalEditProfileOpen: false })
  }

  render() {
    const { isModalEditProfileOpen } = this.state

    return (
      <div className="App" >
        <div className="container">
          <StoreCard onCLickOpenModal={this.onCLickOpenModal} />
        </div>

        <StoreEditModal isActive={isModalEditProfileOpen} onCLickCloseModal={this.onCLickCloseModal} />
      </div>
    )
  }
}

export default App
