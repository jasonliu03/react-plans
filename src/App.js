import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg'
// 引入4个模块组件
import Plan from './components/plan.js'
import Home from './components/home.js'
import Popup from './components/popup.js'
import TestRouter from './components/testrouter.js'
import Detail from './components/detail.js'
// 引入样式文件
import './App.css'
import './components/comment.css'
// 引入路由
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
// 开始代码
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className='App-title'>Welcome to React Plan</h2>
          </div>
          <div>
            // 路由配置
            <Router history = {history}>
               <div className="contentBox">
                  // 编写导航
                  <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/plan">计划表</Link></li>
                    <li><Link to="/test">二级路由</Link></li>
                  </ul>
                  // 路由匹配
                  <div className="content"> 
                    <Route exact path="/" component={Home}/>
                    <Route path="/plan" component={Plan}/>
                    <Route path="/test" component={TestRouter}/>
                    <Route path="/detail/:id" component={Detail}/>
                  </div>
              </div>
            </Router>
          </div>
          <Popup/>
      </div>
    );
  }
}

export default App