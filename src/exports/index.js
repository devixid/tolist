import { lazy } from "react";

// components
export const Button = lazy(() => import("@/components/Button"));
export const Card = lazy(() => import("@/components/Card"));
export const Navbar = lazy(() => import("@/components/Navbar"));
export const Header = lazy(() => import("@/components/Header"));

// pages
export const Todo = lazy(() => import("@/pages/Todo"));
export const Home = lazy(() => import("@/pages"));
export const Loading = lazy(() => import("@/pages/Loading"));
