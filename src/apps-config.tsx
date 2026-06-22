import { type ComponentType, lazy } from "react";

export interface AppItem {
  id: string;
  name: string;
  desc: string;
  element: ComponentType<any>;
}

export const APPS_REGISTRY: AppItem[] = [
  {
    id: "Game-Hub",
    name: "GameHub",
    desc: "GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.",
    element: lazy(() => import("./apps/game-hub")),
  },
  {
    id: "quizzes",
    name: "Quizzes",
    desc: "A quizz application with authentication included",
    element: lazy(() => import("./apps/quizzes")),
  },

  {
    id: "analytics",
    name: "Analytics Suite",
    desc: "This restaurant landing page showcases a contemporary design developed using React, emphasizing reusable functional components and a well-organized file and folder structure. It emphasizes mastery of fundamental CSS properties such as flex for flexible layout design. Responsive design is ensured with meticulously implemented media queries, optimizing display across all devices.",
    element: lazy(() => import("./apps/gerich-restaurant")),
  },
  {
    id: "inventory",
    name: "Inventory",
    desc: "A frontend job assignment focused on converting a static Figma design into a clean, responsive web interface using React and Tailwind CSS.The main goal of this project was pixel-perfect translation, clean code structure, and accurate component layout according to the provided UI design.",
    element: lazy(() => import("./apps/home-inventory")),
  },
  {
    id: "event-calender",
    name: "Event Calender",
    desc: "A google inspired simple event calender app with react vite and tailwindcss",
    element: lazy(() => import("./apps/event-calender")),
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    desc: "A very simple react vite application",
    element: lazy(() => import("./apps/expense-tracker")),
  },
  {
    id: "real-state",
    name: "Real State",
    desc: "A very simple react vite application",
    element: lazy(() => import("./apps/real-estate")),
  },
  {
    id: "project-manager",
    name: "Project Manger",
    desc: "A very simple react vite application",
    element: lazy(() => import("./apps/project-manager")),
  },
  {
    id: "product-list",
    name: "Product List",
    desc: "A very simple react vite application",
    element: lazy(() => import("./apps/product-list")),
  },
];
