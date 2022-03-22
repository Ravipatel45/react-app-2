import React, { Component } from "react";
import logo from '../images/logo192.png'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
        className: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    }
  }
  updateClass() {
    this.setState={
      className: 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
    }
    console.log(this.setState);
  }
// static propTypes = {}
  render() {
    return (
      <>
        <nav className="bg-gray-800">
          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <span className="pl-2 text-white">News app</span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link onClick={this.updateClass} to="/" className={this.state.className} aria-current="page" >Home</Link>
                    <Link to="/business" className={this.state.className} >Business</Link>
                    <Link to="/entertainment" className={this.state.className} >Entertainment</Link>
                    <Link to="/general" className={this.state.className} >General</Link>
                    <Link to="/health" className={this.state.className} >Health</Link>
                    <Link to="/science" className={this.state.className} >Science</Link>
                    <Link to="/sports" className={this.state.className} >Sports</Link>
                    <Link to="/technology" className={this.state.className} >Technology</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
