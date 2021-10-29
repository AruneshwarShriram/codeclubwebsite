import React from "react"
import { Grommet, Box, Grid, Clock, Carousel,Image, Card, CardHeader, CardFooter, Button, CardBody } from 'grommet';



export const novData = [
    {
        id:1,
        date: 2,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "219",
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55j51-bNWwBkhN3gkwlae6ZIb1I0BniU_3Q&usqp=CAU",
    },
    {
        id:2,
        date: 3,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "129",
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55j51-bNWwBkhN3gkwlae6ZIb1I0BniU_3Q&usqp=CAU"
    },
    {
        id: 3,
        date: 6,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "314",
        imgsrc:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61116cea2313e8bae55a536a%2F-Dune-%2F0x0.jpg%3Ffit%3Dscale",
    },
    {
        id: 4,
        date: 7,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "122",
        imgsrc:"https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1587584264/user-564314/profile/vysi2uh7svc61c8dqor6.jpg"
    },
    {
        id: 5,
        date: 7,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "234",
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DgB-ChwKG1Xe8UCt2_C0u0OqOBDVQrjrDw&usqp=CAU"
    },
    {
        id: 6,
        date: 9,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "269",
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55j51-bNWwBkhN3gkwlae6ZIb1I0BniU_3Q&usqp=CAU"
    },

    
];
export const decData = [
    {
        id: 1,
        date: 2,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "219",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55j51-bNWwBkhN3gkwlae6ZIb1I0BniU_3Q&usqp=CAU",
    },
    {
        id: 2,
        date: 3,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "129",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55j51-bNWwBkhN3gkwlae6ZIb1I0BniU_3Q&usqp=CAU"
    },
    {
        id: 3,
        date: 6,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "314",
        imgsrc: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61116cea2313e8bae55a536a%2F-Dune-%2F0x0.jpg%3Ffit%3Dscale",
    },
    {
        id: 4,
        date: 7,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "122",
        imgsrc: "https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1587584264/user-564314/profile/vysi2uh7svc61c8dqor6.jpg"
    },
    {
        id: 5,
        date: 7,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "234",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DgB-ChwKG1Xe8UCt2_C0u0OqOBDVQrjrDw&usqp=CAU"
    },
    {
        id: 6,
        date: 9,
        name: "Debugging ",
        prize: "$10000",
        lastdate: "28th Nov",
        participants: "269",
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55j51-bNWwBkhN3gkwlae6ZIb1I0BniU_3Q&usqp=CAU"
    },


];


function EventList(props){
    function Whatonclick() {
        
        return (
        <h1>h</h1>
    )
    }
    
    return(
        <div>
            
            <Grommet plain>
                <div class="p-7 bg-purple-100 justify-center"><Clock type="digital" /></div>
            <div class="py-5 px-5 font-bold text-4xl text-indigo-700"><u>November</u></div>
            <div class="grid grid-cols-3 gap-3 py-3 px-3">
                {novData.map((data, key) => {
                    return (
                        <div class="m-2 border-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                        <div class="row-span-1  p-3 float-left " key={key}>
                            <h1 class="text-4xl font-semibold">{data.date}</h1>
                           <div class="text-3xl font-semibold py-2">{data.name}</div>
                           <div class="">
                           <b>Prize: {data.prize}</b>
                           <p>Date : {data.lastdate}</p>
                            <p><b>{data.participants}</b> Registered</p></div><br/>
                            <button onClick={Whatonclick} class="bg-purple-300 px-2 py-2  h-15 w-40 hover:bg-purple-500">Click to Register</button>
                            
                        </div>
                       
                        <div class="float-right py-4 px-4"><img src={data.imgsrc} height="120" width="120" alt="error"/></div> 
                            

                        </div>
                        
                    );
                })}
            </div>
            <div class="py-5 px-5 font-bold text-4xl text-indigo-700"><u>December</u></div>
            <div class="grid grid-cols-3 gap-3 py-3 px-3">
                {decData.map((data, key) => {
                    return (
                        <div class="m-2 border-2 bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
                            <div class="row-span-1  p-3 float-left" key={key}>
                                <h1 class="text-4xl font-semibold">{data.date}</h1>
                                <div class="text-3xl font-semibold py-2">{data.name}</div>
                                <div class="">
                                    <b>Prize: {data.prize}</b>
                                    <p>Date : {data.lastdate}</p>
                                    <p><b>{data.participants}</b> Registered</p></div>

                            </div>
                            <div class="float-right py-4 px-4"><img src={data.imgsrc} height="150" width="150" alt="error" /></div>
                        </div>
                    );
                })}
                </div>
                
                </Grommet>
       
        </div>
    )
}
export {EventList}