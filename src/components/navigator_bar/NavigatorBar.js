import React from 'react';

import tools from '../public/methods';

require('./NavigatorBar.css');

class NavigatorBar extends React.Component {
    constructor() {
        super();
        this.state = {
            navigatorBarMsg: [
                {id: "shbh", name: "生活百货", href: '/'},
                {id: "fzxb", name: "服装鞋包", href: '/'},
                {id: "mzhl", name: "美妆护理", href: '/'},
                {id: "msmw", name: "美食美味", href: '/'},
                {id: "smpj", name: "数码配件", href: '/'},
                {id: "shdq", name: "生活电器", href: '/'},
                {id: "ydhw", name: "运动户外", href: '/'},
                {id: "dpcx", name: "大牌促销", href: '/'},
                {id: "9k9by", name: "9块9包邮", href: '/'},
                {id: "0yg", name: "0元购", href: '/'},
            ],
            activeItem: null
        }
    }

    componentDidMount() {
        const navigatorBarIn = document.querySelector('.navigator-bar-in');
        tools.handleEvent.addEvent(navigatorBarIn, 'click', (e) => {
            console.log(e.target);
        })
    }

    render() {
        const allItem = [];
        Array.from(this.state.navigatorBarMsg).forEach((v, i) => {
            allItem.push(<a className="navigator-bar-item" href={v.href} key={v.id}>{v.name}</a>)
        })
        return (
            <div className="wrapper navigator-bar-out">
                <div className="container navigator-bar-in">
                    {allItem}
                </div>

            </div>
        )
    }
}

export default NavigatorBar;