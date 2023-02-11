import { lazy } from "react";

// components
export const Button = lazy(() => import("@/components/Button"));
export const Card = lazy(() => import("@/components/Card"));
export const Navbar = lazy(() => import("@/components/Navbar"));
export const Header = lazy(() => import("@/components/Header"));
export const TodoCard = lazy(() => import("@/components/TodoCard"));
export const Figures = lazy(() => import("@/components/Figures"));

// pages
export const TodoDetail = lazy(() => import("@/pages/TodoDetail"));
export const Home = lazy(() => import("@/pages"));
export const Loading = lazy(() => import("@/pages/Loading"));
