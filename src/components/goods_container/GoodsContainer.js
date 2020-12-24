import React from 'react';

import ToolBar from './tool_bar/ToolBar';
import Goods from './goods/Goods';


require('./GoodsContainer.css');


class GoodsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            allGoods: [
                {
                    'id': '01',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': './static/icons/new.png'
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
                {
                    'id': '02',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': './static/icons/new.png'
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'tb',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
                {
                    'id': '03',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': './static/icons/new.png'
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'jd',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
                {
                    'id': '04',
                    'label': {
                        'state': true,
                        'title': '新上架',
                        'url': './static/icons/new.png'
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'pdd',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
                {
                    'id': '05',
                    'label': {
                        'state': false,
                        'title': '',
                        'url': './static/icons/new.png'
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
                {
                    'id': '06',
                    'label': {
                        'state': false,
                        'title': '',
                        'url': ''
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
                {
                    'id': '07',
                    'label': {
                        'state': false,
                        'title': '',
                        'url': ''
                    },
                    'ppt': ['./static/goods/001/1.jpg', './static/goods/001/2.jpg', './static/goods/001/3.jpg', './static/goods/001/4.jpg',],
                    'source': 'tm',// 天猫（tb,tm,jd,pdd）
                    'brand': '【iphone】',
                    'title': 'Apple/苹果 iPhone 12 全网通5G新品智能手机苏宁易购官方旗舰正品',
                    'originalPrice': 6299,
                    'presentPrice': 7599,
                    'couponsPrice': 1300,
                    'shopName': 'iphone官方旗舰店',
                    'monthlySale': 999,
                    'address': '北京',
                    'details': {}
                },
            ],
        }
    }

    render() {
        const allGoods = [];
        this.state.allGoods.forEach((v, i) => {
            allGoods.push(
                <Goods goodsMsg={v} key={v.id}/>
            );
        });
        return (
            <div className="wrapper">
                <div className="container">
                    <ToolBar/>
                    <div className="goods-warpper">
                        {allGoods}
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsContainer;