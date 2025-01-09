import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './pages/Dashboard.jsx'
import Bookings from './pages/Bookings.jsx'
import Cabins from './pages/Cabins.jsx'
import Users from './pages/Users.jsx'
import Settings from './pages/Settings.jsx'
import Account from './pages/Account.jsx'
import Login from './pages/Login.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import GlobalStyleComponent from './styles/GlobalStyles.js'
import Booking from "./pages/Booking.jsx"
import AppLayout from "./ui/AppLayout.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"
import Checkin from "./pages/Checkin.jsx"
import ProtectedRoute from "./ui/ProtectedRoute.jsx"
import { DarkmodeProvider } from "./context/DarkModeContext.jsx"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    }
  }
})


const App = () => {
  return (
    <DarkmodeProvider>

      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyleComponent />
        <BrowserRouter>
          <Routes>
            <Route element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='bookings' element={<Bookings />} />
              <Route path='bookings/:bookingId' element={<Booking />} />
              <Route path='checkin/:bookingId' element={<Checkin />} />
              <Route path='users' element={<Users />} />
              <Route path='cabins' element={<Cabins />} />
              <Route path='settings' element={<Settings />} />
              <Route path='account' element={<Account />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster position="top-center" gutter={12} containerStyle={{ margin: '8px' }} toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "vae(--color-grey-0)",
            color: "var(--color-grey-700)",
          }
        }} />

      </QueryClientProvider>
    </DarkmodeProvider>
  )
}

export default App
