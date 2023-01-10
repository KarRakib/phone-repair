import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router'
import {
  QueryClient,
 QueryClientProvider,
} from '@tanstack/react-query'
import  { Toaster } from 'react-hot-toast'


// Create a client
const queryClient = new QueryClient()
function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} ><Toaster/> </RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
