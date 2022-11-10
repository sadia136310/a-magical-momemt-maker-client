import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';


function App() {

  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
