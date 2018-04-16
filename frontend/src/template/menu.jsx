import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <i className="fa fa-list-alt"></i> TodoApp
                </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="#/todo">Todo</a></li>
                    <li><a href="#/about">About</a></li>
                </ul>
            </div>
        </div>
    </nav>
)