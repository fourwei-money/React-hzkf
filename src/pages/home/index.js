import React from 'react'

import { Route } from "react-router-dom"
// 导入页面的子路由组件
import Profile from "../Profile"
import News from "../News"
import HouseList from "../HouseList"
import Index from "../Index"
export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>这是home页面</h1>
                <Route path="/home/index" component={Index}></Route>
                <Route path="/home/list" component={HouseList}></Route>
                <Route path="/home/news" component={News}></Route>
                <Route path="/home/profile" component={Profile}></Route>
            </div>
        )


    }
}