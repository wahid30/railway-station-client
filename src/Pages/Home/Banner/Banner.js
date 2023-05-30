import React from "react";
import BannerItem from "./Banneritem";
const bannerData = [
    {
        image: "https://pixahive.com/wp-content/uploads/edd/2020/08/Railway-Station-3260-pixahive.jpg",
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: 
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/ib9300350e4963525/version/1457437210/best-railway-stations-in-europe-central-station-milan-european-best-destinations-copyright-rostislav-glinsky.jpg",
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://th.bing.com/th/id/R.d0fc3945f90d4b7c6eec367469bb5ae7?rik=DeWHkbn3vbLvKA&riu=http%3a%2f%2fwww.luphen.org.uk%2fimages%2f2008%2f2008-06%2f2008-06-01-123647.jpg&ehk=LsssUaZh4S2XY6NnrlMAFcOej9Lx65Dq2WsDRBYDFmU%3d&risl=&pid=ImgRaw&r=0',
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ib9300350e4963525/version/1457437210/best-railway-stations-in-europe-central-station-milan-european-best-destinations-copyright-rostislav-glinsky.jpg",
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: "https://i.ytimg.com/vi/erFFREubaJ8/maxresdefault.jpg",
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: "https://constructionbusinesstoday.com/wp-content/uploads/2020/07/Railway_Station.jpg",
        prev: 5,
        id: 6,
        next: 1
    }
]
const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
           
        </div>
    );
};

export default Banner;

