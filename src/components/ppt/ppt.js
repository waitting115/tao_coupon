import React, {Component} from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.less';

import Swiper from 'swiper';
require("../public/swiper-master/package/swiper-bundle.css");

require('./ppt.css');

class PPT extends Component {
    constructor () {
        super();
        this.state = {
            pptMsg: [
                {id:'01', src: './static/ppt/ppt01.png'},
                {id:'02', src: './static/ppt/ppt02.png'},
                {id:'03', src: './static/ppt/ppt03.png'}
            ]
        };
        this.mySwiper = null;
    }

    componentDidMount() {
        this.mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
                dynamicMainBullets: 1,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    }

    componentWillUnmount() {
        // 释放内存
        this.mySwiper.destroy()
    }

    render() {
        const allPPT = [];
        this.state.pptMsg.forEach((v, i) => {
            allPPT.push(<div className="swiper-slide" key={v.id}>
                <img src={v.src}  alt={v.id}></img>
            </div>)
        })
        
        return (
            <div className="wrapper">
                <div className="container swiper-container">
                    <div className="swiper-wrapper">
                        {allPPT}
                    </div>

                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    {/* <Swiper
                        className="swiper"
                        direction="horizontal"
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={this.onSlideChange}
                        onSwiper={this.onSwiper}
                    >
                        <SwiperSlide className="swiper-slide">1</SwiperSlide>
                        <SwiperSlide className="swiper-slide">2</SwiperSlide>
                        <SwiperSlide className="swiper-slide">3</SwiperSlide>
                        <SwiperSlide className="swiper-slide">4</SwiperSlide>
                        <SwiperSlide className="swiper-slide">5</SwiperSlide>
                    </Swiper> */}
                </div>
            </div>
        )
    }
}

export default PPT;