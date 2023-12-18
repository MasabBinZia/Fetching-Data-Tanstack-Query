
import './App.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import Demo from './Demo';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <h1><b>React Query Fetching Data From API</b></h1>
      <Demo/>
    </QueryClientProvider>
  )
}

export default App
