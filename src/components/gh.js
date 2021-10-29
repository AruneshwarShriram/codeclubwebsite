import React, { Component } from "react";
import Slider from "react-slick";



export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <h2>Fade</h2>
                <Slider {...settings}>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1"/>
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                    <div>
                        <img height="300" width="300" src="https://i.pinimg.com/736x/0f/1b/b4/0f1bb4e95c6c73d990f0c2a8f7c33ea1.jpg" alt="1" />
                    </div>
                </Slider>
            </div>
        );
    }
}