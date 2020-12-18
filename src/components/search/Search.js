import React, {Component, Fragment} from 'react';

import tools from '../public/methods';

require('./search.css');

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTopMsg: [
                {name:'全部',id:'qb'},
                {name:'淘宝', id:"tb"},
                {name:'天猫', id:"tm"},
                {name:'京东', id:"jd"}, 
                {name:'拼多多', id:"pdd"}
            ],
            searchActiveId: 'qb'
        }
    }

    componentDidMount() {
        const searchTop = document.querySelector('.search-top');

        // 默认为"全部"添加.active样式
        Array.from(searchTop.children).forEach((v, i) => {
            const targetName = v.getAttribute('name');
            if(targetName === this.state.searchActiveId) {
                v.classList.add('active');
            }
        })
        // 事件代理
        tools.handleEvent.addEvent(searchTop, 'click', (e) => {
            const target = e.target ? e.target : window.event.target;
            Array.from(searchTop.children).forEach((v, i) => {
                v.classList.remove('active');
            })
            target.classList.add('active');
            this.setState({
                searchActiveId : target.getAttribute('name')
            })
        })
    }

    componentWillUnmount() {
        // 解绑事件,释放缓存 
        const searchTop = document.querySelector('.search-top');
        tools.handleEvent.removeEvent(searchTop, 'click')
    }
    render() {
        let searchTopList = [];
        this.state.searchTopMsg.forEach((v, i) => {
            searchTopList.push(
            <div className="search-top-list-item" name={v.id} key={v.id}>{v.name}</div>
            )
        });

        return (
            <Fragment>
                <div className="wrapper">
                    <div className="container search">
                        <div className="search-logo col-pb-2 col-yd-0">
                            <div>logo</div>
                        </div>
                        <div className="search-box col-pb-8 col-yd-12">
                            <div className="search-top col-yd-12">
                                {searchTopList}
                            </div>
                            <div className="search-bottom col-yd-12">
                                <input className="search-bottom-input" type="text" placeholder="输入宝贝标题或关键字开始探索~"/>
                                <button className="search-bottom-btn">搜 索</button>
                            </div>
                        </div>
                        <div className="search-qrcode col-pb-2 col-yd-0">
                            <div>qr-code</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Search;