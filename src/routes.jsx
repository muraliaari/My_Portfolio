import App from "./App"
import Home from './components/Home'
import Projects from "./components/Projects"

const routes = [
    {
      path: "/",
      element: <App />,
      
      children: [
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: "projects",
          element: <Projects/>,
        },
      ],
    },
  ]


  export default routes