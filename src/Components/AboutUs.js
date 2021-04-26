import React,{Component} from 'react';

import {Jumbotron} from 'reactstrap';
class AboutUs extends Component{

    render(){
        return(
            <>
            <div> 
                <img className="img-fluid w-100" src="./images/about-us.jpg" alt="" />
            </div>

        <Jumbotron style={{margin:0}}>
            <div>
            <div className="row">
            <div className="col-lg-6">
                <h3>Who are we and what we do?
                    <hr className="w-75 float-left"/>
                </h3>
                
            </div>
            <div className="col-lg-6">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione temporibus
                aperiam harum alias officiis assumenda officia quibusdam deleniti
                eos cupiditate dolore doloribus!
                </p>
                <p>
                Ad dolore dignissimos asperiores dicta facere optio quod commodi
                nam tempore recusandae. Rerum sed nulla eum vero expedita ex
                delectus voluptates rem at neque quos facere sequi unde optio
                aliquam!
                </p>
                <p>
                Tenetur quod quidem in voluptatem corporis dolorum dicta sit
                pariatur porro quaerat autem ipsam odit quam beatae tempora
                quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur
                at!
                </p>
            </div>
            </div>
        </div>
        <Jumbotron style={{margin:0}}>
        <div className="row">
          <div className="col-md-6 ">
            <h5 className="d-flex justify-content-center">MEET THE TEAM</h5>
            <h6>
              “Individuals can and do make a difference, but it takes a team to
              really mess things up.”
              
              <hr className="w-90"/>
            </h6>
            <div className="row">
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Aaryan Sharma</h5>
                        <p className="card-text">Role</p>
                        <a href="https://www.linkedin.com/in/aaryan-sharma/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/Aaryan8751" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2 " aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Pratikshit Agrahari</h5>
                        <p className="card-text">Role</p>
                        <a href="https://www.linkedin.com/in/pratikshitagrahari/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/Pratikshit09" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Naman Cheetu</h5>
                        <p className="card-text">Role</p>
                        <a href="https://www.linkedin.com/in/naman-cheetu-135455188/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/namancheetu" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 mt-1">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Kunal Mahajan</h5>
                        <p className="card-text">Role</p>
                        <a href="https://www.linkedin.com/in/kunal-mahajan-431b97189/" target="_blank">
                            <i className="fab fa-linkedin-square fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/kunalmahajan12" target="_blank">
                            <i style={{color:'black'}} className="fab fa-github fa-2x ml-2 " aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>

            </div>
          </div>
          <div className='offset-1 col-lg-5'>
            <img className="w-75" src="./images/team.png" alt="" />
          </div>
        </div>
      </Jumbotron>
      </Jumbotron>
            </>
        );
    }
}

export default AboutUs