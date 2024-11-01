import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from "./page/Authentication"
import Register from "./page/Register"
import ProtectedRoute from "./ProtectedRoute"
import Invest from "./page/Invest"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="auth" element={<Authentication />} />
          <Route path="register" element={<Register />} />
          <Route
            path="invest"
            element={
            <ProtectedRoute>
              <Invest />
            </ProtectedRoute>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
