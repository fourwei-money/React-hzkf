import React from "react"
import ReactDOM from "react-dom"
// 引入 antd-mobile 的样式
import 'antd-mobile/dist/antd-mobile.css'
// 初始化样式
import "./index.css"
// 导入组件
import App from "./App"
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>1111</h1>
//       </div>
//     )
//   }
// }
ReactDOM.render(<App></App>, document.getElementById("root"))



