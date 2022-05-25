import React, { Component } from 'react'
import SideNavBar from '../components/navBar/sideNavBar';
import { FileUploader } from './sketchUploader';
import '../assets/css/home.css';
import '../assets/css/textarea.css';

export default class home extends Component {

    render() {
        return (
            <div>
                <body class="g-sidenav-show   bg-gray-100">
                    <div class="min-height-100 bg-primary position-absolute w-100"></div>
                    <SideNavBar />
                    <main class="main-content position-relative border-radius-lg ">
                        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                            <div class="container-fluid py-1 px-3">
                                <nav aria-label="breadcrumb"><br />
                                    <h5 class="font-weight-bolder text-white mb-0">Sketch to XML process</h5>
                                </nav>
                            </div>
                        </nav><br /><br />
                        <div class="container-fluid py-4">
                            <div class="row">
                                <center>
                                    <div class="card bg-light text-dark" style={{ width: '1300px', height: '1130px' }}>
                                        <div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                            Upload Sketch here
                                        </div>
                                        <div class="card-body">
                                            <center>
                                                <form onSubmit={this.onSubmit}>
                                                <FileUploader />
                                                    <button type="submit" className="btn btn-primary" id="submitBtn" style={{ width: "200px" }}>Submit</button><br /><br />

                                                    <div class="alert alert-secondary" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                                        Display Sketch and XML file
                                                    </div><br />

                                                    <div class="row">
                                                        <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                                                            <div class="alert alert-dark" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                                                Standard UI
                                                            </div>
                                                            <p style={{ backgroundColor: '#b7b7c7', height: '450px', borderRadius: '10px' }}></p>
                                                        </div>
                                                        <div class="col-xl-6 col-sm-6 mb-xl-0 mb-4">
                                                            <div class="alert alert-dark" role="alert" style={{ color: 'white', fontFamily: 'Noto Sans, sans-serif' }}>
                                                                XML File
                                                            </div>
                                                            <textarea id="xmlString" className="textAreaStyle"></textarea>
                                                        </div>
                                                    </div>
                                                </form>
                                            </center>
                                        </div>
                                        <div class="col-12 text-end">
                                            <a class="btn btn-primary" href="" style={{ marginRight: '30px', marginTop: '-20px' }}>Download XML File</a>
                                        </div>
                                    </div></center>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}

