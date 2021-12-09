import React, { useEffect, useState } from 'react';
import {Carousel} from 'antd';


function MainPage(){
    
    const [ PosterList, setPosterList ] = useState([]);
    
    useEffect(()=>{
        const posterList = [
            {
                index : 1,
                imagePath : '/img/poster/1stSC01.jpg',
                title : '시로코',
            },
            {
                index : 2,
                imagePath : '/img/poster/1stSC02.jpg',
                title : '대책위원회1',
            },
            {
                index : 3,
                imagePath : '/img/poster/1stSC03.jpg',
                title : '대책위원회2',
            },
            {
                index : 4,
                imagePath : '/img/poster/1stSC04.jpg',
                title : '대책위원회3',
            },
            {
                index : 5,
                imagePath : '/img/poster/1stSC08.jpg',
                title : '풍기위원회',
            },
            {
                index : 6,
                imagePath : '/img/poster/1stSC09.jpg',
                title : '흥신소68',
            },
        ]
        setPosterList(posterList);
    },[])
    const onChange = () => {
        
    }
    const changePoster = (url) => {
        let contentStyle = {
            height: '600px',
            lineHeight: '160px',
            background: 'url(/img/poster/1stSC01.jpg) no-repeat center',
            backgroundColor : 'black',
            backgroundSize: 'contain',
    
        };
        contentStyle.background = `url(${url}) no-repeat center`
        return contentStyle;
    }
    
    return (
        <>
            <Carousel afterChange={onChange} autoplay>
               { PosterList &&
                   PosterList.map((poster, index)=>{
                       return (
                        <div key={index}>
                            <div style={changePoster(poster.imagePath)}></div>
                        </div>
                       );
                   })
               }
            </Carousel>
        </>
    );
}
export default MainPage;