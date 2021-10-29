import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Data1, Data3} from "./eachteamdata"
import { Data2 } from "./eachteamdata";
import Slider from "react-slick";
import "./try.css"

function ConvertedItem(props){
    const Teams1=[
        {
            DataofTeam:Data1,
            TeamName:"Website Creation",
        },
        {
            DataofTeam: Data2,
            TeamName: "Debugging",
        },
        {
            DataofTeam: Data3,
            TeamName: "Meme Creation",
        },
        {
            DataofTeam: Data3,
            TeamName: "Gameathon",
        },
        {
            DataofTeam: Data3,
            TeamName: "Game Development",
        },
        {
            DataofTeam: Data3,
            TeamName: "Short Film",
        }
    ]
    

    const settings = {
        dots: true,
        infinite: false,
        
        speed: 500,
        /*fade:true,*/
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    
    return(
        
        <div id="div0">
                {Teams1.map((Data,key)=>{
                    return(
                        <div>
                           
                <center id="center1">{Data.TeamName}</center>
                <div id="div1" >

                    <div id="div2">
                        <Slider {...settings}>
                            {Data.DataofTeam.map((data, key) => {
                                return (
                                    <div id="div3" ><center>
                                        <div id="div4" >

                                            <div id="div5">
                                                <img id="img1" src={data.imgsrc} height="170" width="170" alt="error" />
                                            </div>
                                            <div id="div6">
                                                {data.name}
                                            </div>

                                        </div></center>
                                    </div>
                                )
                            })}
                        </Slider>
                                    <br /><br />
                                </div></div>
                            </div>)
                })}
            </div>
        );
                        }


export { ConvertedItem}