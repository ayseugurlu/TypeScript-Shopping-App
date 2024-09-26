
import AppRouter from './routers/AppRouter'
import { Provider } from "react-redux";
import {store} from "./app/store"

function App() {
  

  return (
    <div className=' min-h-screen'>
      <Provider store={store}>
     <AppRouter/>
    </Provider>
    </div>
    
  )
}

export default App


   