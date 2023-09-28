
import './App.css';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import VideoContainer from './Components/VideoContainer';
import WatchVideoComponent from './Components/WatchVideoComponent';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SearchContainer from './Components/SearchContainer';

const appRouter = createBrowserRouter([{
 path:'/',
 element: <Body />,
 children:[
{
  path:'/',
 element: <VideoContainer />,
},
{
  path:'/watch',
 element: <WatchVideoComponent />,
},
{
  path:'/search',
 element: <SearchContainer />,
},
 ]
}]
)
const  App = () => {
  return (
    <Provider store={store} >
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
