import { Navigate, Route, Routes } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NutritionDashboardPage from "./pages/NutritionDashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SkinDashboardPage from "./pages/SkinDashboardPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/reports/skin" element={<SkinDashboardPage />} />
      <Route path="/reports/nutrition" element={<NutritionDashboardPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
