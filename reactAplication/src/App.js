import logo from './logo.svg';
import './App.css';
import Show from './components/getApiShowpictures'
// import {Login, ViewDetails} from './components/lesson2'
import {Login} from './components/login'
import {Clock,ShowArray} from './components/clock_and_array'
import {Img1} from './components/img1'
import {Img2} from './components/img2'
import {Img3} from './components/img3'
import {Img4} from './components/img4'
import {Layout} from './components/reactChildren_carusel'
import {HocClock} from './components/clock_and_array_hoc'
import Header from './components/reactMemo'
import {getAllStudents} from './services/connectToServer'
import {ToDoList}from './components/todoList'
import {MyRouter}from './components/project/router'
import { RouteExa } from './components/Router/routerExample';
import store  from './components/project/redux/store'
import {Provider} from 'react-redux'
function App() {
  getAllStudents()
  return (
    <div className="App">
     {/* <ViewDetails></ViewDetails> */}
     {/* <Show></Show> */}
     {/* <Clock></Clock>
     <ShowArray></ShowArray> */}
     {/* <HocClock></HocClock>
     <Layout>
     <Img1></Img1>
     <Img2></Img2>
     <Img3></Img3>
     <Img4></Img4>
     </Layout> */}
     {/* <Header></Header> */}
     {/* <Login></Login> */}
     
      {/* <ToDoList></ToDoList> */}
       {/* //redax */}
      <Provider store={store}>
      {/* <UserDetails></UserDetails>
       <CompanyDetails></CompanyDetails>
    <CustomerDetails></CustomerDetails> */}
          {/* <RouteExa></RouteExa> */}
          <MyRouter></MyRouter>
       </Provider>
    </div>
  );
}

export default App;

