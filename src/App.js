import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"  

import Home from "./pages/home"
import CityList from "./pages/CityList"
const App = () => {
  return (
    <Router>
      <div className="app">
        {/* 首页 */}
        <Route path="/home" component={Home}></Route>
        {/* 城市选择 */}
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  )
}
export default App
