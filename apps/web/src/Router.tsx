import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import MainLayout from "./layout/MainLayout"
import ProtectedRoute from "./components/ProtectedRouter"
import ProductDetail from "./pages/ProductDetail"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
    <ProtectedRoute>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id",
    element :(
        <ProtectedRoute>
            <MainLayout>
                <ProductDetail />
            </MainLayout>
        </ProtectedRoute>
    )
  }
])