import React from 'react'
import bg from "../Assets/Images/bg.jpg";
const EventSilder = (props) => {
    const { key } = props;
    return (
        <div>

            <div id={key} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={bg} id="image1" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg} id="image2" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg} id="image3" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
    )
}

export default EventSilder
