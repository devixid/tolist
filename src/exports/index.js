import { lazy } from "react";

export { default as Navbar } from "@/components/Navbar";
export { default as Portal } from "@/components/Portal";

// components
export const Button = lazy(() => import("@/components/Button"));
export const Card = lazy(() => import("@/components/Card"));
// export const Navbar = lazy(() => import("@/components/Navbar"));
export const Header = lazy(() => import("@/components/Header"));
export const TodoCard = lazy(() => import("@/components/TodoCard"));
export const Figures = lazy(() => import("@/components/Figures"));

// Modals
export { default as ModalDelete } from "@/components/ModalDelete";
export { default as ModalInfo } from "@/components/ModalInfo";
export { default as ModalListItem } from "@/components/ModalListItem";
// export const ModalDelete = lazy(() => import("@/components/ModalDelete"));

// pages
export const TodoDetail = lazy(() => import("@/pages/TodoDetail"));
export const Home = lazy(() => import("@/pages"));
export const Loading = lazy(() => import("@/pages/Loading"));
