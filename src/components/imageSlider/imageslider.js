import React, {Component} from 'react';
import './imageSlider.css';

export class Imageslider extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="first-slide img-fluid" src="http://www.biek.edu.pk/images/mainbanner.jpg" alt="First slide" />
                <div className="container">
                    <div className="carousel-caption text-center">
                    <h1>Wellcome to Board of Intermediate Education Karachi.</h1>
                    <p>This is Official Website of Board of Intermediate Education Karachi.</p>
                    {/* <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p> */}
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="second-slide img-fluid" src="http://www.biek.edu.pk/karachi%20inter%20board%20banner%20(1).jpg" alt="Second slide" />
                <div className="container">
                    <div className="carousel-caption text-center">
                    <h1>Want's Result on your Mobile?</h1>
                    <p>Type "BIEK" &lt;space&gt; Your Roll# and send it to 8583.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="third-slide img-fluid" src="http://www.biek.edu.pk/activeties/picture%20galary/WhatsApp%20Image%202018-04-11%20at%201.55.08%20PM.jpeg" alt="Third slide" />
                <div className="container">
                    <div className="carousel-caption text-center">
                    <h1>No Cheating.</h1>
                    <p>Chief Minister Mr. Murad Ali Shah gave Strickly Order to board.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn More</a></p>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <img className="third-slide img-fluid" src="http://www.biek.edu.pk/activeties/picture%20galary/WhatsApp%20Image%202018-04-11%20at%201.56.53%20PM.jpeg" alt="Third slide" />
                <div className="container">
                    <div className="carousel-caption text-center">
                    <h1>Two Girls win the 1st position in Board Exams.</h1>
                    <p>Two young girls Study Hard to give exams and take 1st position from Karachi.</p>
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                    </div>
                </div>
                </div>
            </div> 
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
        </div>
        )
    }
}