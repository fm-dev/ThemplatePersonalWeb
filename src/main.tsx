import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomeScreen } from "@/pages/home-screen";
import { NotFound } from "@/pages/not-found";
import { RouteProvider } from "@/providers/router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import Dashboard from "./pages/Dashboard";
import { App } from "./pages/App";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import CarrerPath from "./pages/CarrerPath";
import Project from "./pages/Project";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <RouteProvider>
                    <Routes>
                        <Route path="/" element={<App><Dashboard /></App>} />
                        <Route path="/AboutMe" element={<App><AboutMe /></App>} />
                        <Route path="/education" element={<App><Education /></App>} />
                        <Route path="/CarrerPath" element={<App><CarrerPath /></App>} />
                        <Route path="/project" element={<App><Project /></App>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </RouteProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
