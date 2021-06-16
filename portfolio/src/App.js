import React, { Suspense } from 'react'

import './App.scss'
import NavBar from './components/NavBar'
import {Switch,Route} from 'react-router-dom'
import * as ROUTES from './constant/routes'


const NotFound = React.lazy(() => import('./pages/NotFound'))
const aboutPage = React.lazy(() => import('./pages/AboutPage'))
const homePage = React.lazy(() => import('./pages/Homepage'))
const blogPage = React.lazy(() => import('./pages/BlogPage'))
const portfolioPage = React.lazy(() => import('./pages/PortfoliosPage'))
const contactPage = React.lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
        <Suspense fallback={<p>Loading..</p>}>
        <Switch>
          <Route path={ROUTES.HOMEPAGE} exact component={homePage} />
          <Route path={ROUTES.ABOUT} exact component={aboutPage} />
          <Route path={ROUTES.BLOG} exact component={blogPage} />
          <Route path={ROUTES.PORTFOLIO} exact component={portfolioPage} />
          <Route path={ROUTES.CONTACT} exact component={contactPage} />
          <Route component={NotFound} />
        </Switch>
        </Suspense>

          {/* <HomePage /> */}
        </div>

      </div>
    </div>
  );
}

export default App;
