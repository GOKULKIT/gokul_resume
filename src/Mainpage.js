import React from "react";
import './App.css';
import img1 from './photo.jpg';


function Main() {
    return (<>

        <div className="container mt-5 pt-3">
            <div className="row mt-4">
                <div className="col-9 col-sm-9">
                    <h1> GOKUL.K </h1>
                    <h2 style={{color:"#984414"}}>Full Stack Developer </h2>


                    <div class="accordion-body">
                        <div class="form-check form-check-inline">
                            <i class="fa fa-envelope " aria-hidden="true"></i>
                            <label class="form-check-label ms-2" for="flexRadioDefault1">
                                gokulkanagara82@gmail.com
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                            <label class="form-check-label ms-2" for="flexRadioDefault2">
                                6379831961
                            </label>
                        </div>

                        <div class="form-check form-check-inline">
                            <i class="fa fa-address-card" aria-hidden="true"></i>
                            <label class="form-check-label ms-2" for="flexRadioDefault2">
                                Marriamman kovil Chinnakuyili
                            </label>
                        </div>
                        <br></br>
                        <div class="form-check form-check-inline">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <label class="form-check-label ms-2" for="flexRadioDefault2">
                                TamilNadu INDIA
                            </label>
                        </div>
                    </div>
                </div>

                <div className="col-3 col-sm-3">
                    <img src={img1} class="img-thumbnail" style={{ width: "60%", padding: "4px", margin: "13px", borderRadius: "25px" }} alt="..." />

                </div>

            </div>

            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h3>EXPERIENCE</h3>
                    <hr></hr>
                    <h4 className="mt-4"> FRONT-END-DEVELOPER</h4>
                    <h6 className="mt-2" style={{color:"#984414"}} >PSG Software Technologies</h6>
                    <div class="form-check form-check-inline">

                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                            MAY 2022 – NOVEMBER 2022
                        </label> </div>
                    <div class="form-check form-check-inline">

                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                            COIMBATORE
                        </label>
                    </div>
                    <ul className="d-block">
                        <li>Handling Library Project
                        </li>
                        <li>Handling LOGIN Project</li>
                    </ul>

                    <h4 className="mt-4"> Full Stack Developer</h4>
                    <h6 className="mt-2" style={{color:"#984414"}}>KITKAT Software Technologies</h6>
                    <div class="form-check form-check-inline">

                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                            DECEMBER 2022 – Ongoing
                        </label> </div>
                    <div class="form-check form-check-inline">

                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                            COIMBATORE
                        </label>
                    </div>
                    <ul className="d-block">
                        <li> Handling Movie API Project
                        </li>
                        <li>Handling Add To Cart Project</li>
                    </ul>

                    <h3 className="mt-3" style={{color:"#984414"}}>PROJECTS</h3>
                    <hr></hr>
                    <h4> Project 1</h4>
                    <h6 style={{color:"#984414"}}>Library Project</h6>

                    <ul className="d-block">
                        <li>Collect and catalog Library Record in CRUD Operation</li> </ul>


                    <h4 className="mt-5"> Project 2</h4>
                    <h6 style={{color:"#984414"}}>KitKat Website</h6>
                    <ul className="d-block">
                        <li>A short abstract would also work.</li> </ul>
                </div>

                <div className="col-md-6 col-sm-12 ms-0">
                    <h3>MY LIFE PHILOSOPHY</h3>
                    <hr></hr>
                    <h6> " I always want to improve at my job "</h6>
                    <h6> " I enjoy learning new things "</h6>


                    <h4 className="mt-5" style={{color:"#984414"}}>STRENGTHS</h4>
                    <hr></hr>
                    <div className="d-flex gap-3">
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">Smart-Working</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">Teamwork</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">Motivator & Leader</span>
                    </div>

                    <h4 className="mt-5" style={{color:"#984414"}}>SKILLS</h4>
                    <hr></hr>
                    <div className="d-flex gap-3">
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">HTML</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">CSS</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">JavaScript</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">Jquery</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">React js</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">Node js</span>
                        <span class="badge bg-warning text-dark pe-4 ps-4 pt-2 pb-2">Mongodb</span>
                    </div>

                    <h4 className="mt-5" style={{color:"#984414"}}>LANGUAGES</h4>
                    <hr></hr>

                    <div class="row container justify-content-between">
                        <div class="col-4">
                            English
                        </div>
                        <div class="col-8 d-flex gap-2">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios3" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios4" id="exampleRadios1" value="option1" />
                        </div>
                        <br></br>
                        <div class="col-4">
                            Tamil
                        </div>
                        <div class="col-8 d-flex gap-2">
                            <input class="form-check-input" type="radio" name="exampleRadios9" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios5" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios6" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios7" id="exampleRadios1" value="option1" checked />
                            <input class="form-check-input" type="radio" name="exampleRadios8" id="exampleRadios1" value="option1" checked />


                        </div>
                    </div>

                    <h4 className="mt-3" style={{color:"#984414"}}>EDUCATION</h4>
                    <hr></hr>
                    <h5> B.COM</h5>
                    <h6 style={{color:"#984414"}}>Sri Ramakrishna College of Arts Science</h6>
                    <div class="form-check form-check-inline">

                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                            June 2019 – May 2022

                        </label> </div>
            
                        <h5 className="mt-2"> HSC</h5>
                    <h6 style={{color:"#984414"}}>Shree Gurukulam Higher Secondary School</h6>
                    <div class="form-check form-check-inline">

                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <label class="form-check-label ms-2" for="flexRadioDefault2">
                        June 2018 – April 2019
                        </label> </div>


                        <h5 className="mt-2"> SSC</h5>
                    <h6 style={{color:"#984414"}}>RKR Higher Secondary School</h6>
                    <div class="form-check form-check-inline mb-10">

                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                        <label class="form-check-label ms-2 mb-5" for="flexRadioDefault2">
                        June 2016 – April 2017

                        </label> </div>

                </div>

            </div>

        </div>
    </>)
}

export { Main }