import { type ComponentType, lazy } from "react";

export interface AppItem {
  id: string;
  name: string;
  desc: string;
  img: string;
  element: ComponentType<any>;
}

export const APPS_REGISTRY: AppItem[] = [
  {
    id: "project-manager",
    name: "Project Manger",
    desc: "A very simple react vite application",
    img: "../src/assets/project-manager.png",
    element: lazy(() => import("./apps/project-manager")),
  },
  {
    id: "game-hub",
    name: "GameHub",
    desc: "GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.",
    img: "../src/assets/game-hub.png",

    element: lazy(() => import("./apps/game-hub")),
  },
  {
    id: "inventory",
    name: "Inventory",
    desc: "A frontend job assignment focused on converting a static Figma design into a clean, responsive web interface using React and Tailwind CSS.The main goal of this project was pixel-perfect translation, clean code structure, and accurate component layout according to the provided UI design.",
    img: "../src/assets/inventory.png",

    element: lazy(() => import("./apps/home-inventory")),
  },
  {
    id: "event-calender",
    name: "Event Calender",
    desc: "A google inspired simple event calender app with react vite and tailwindcss",
    img: "../src/assets/event-calender.png",

    element: lazy(() => import("./apps/event-calender")),
  },
  {
    id: "quizzes",
    name: "Quizzes",
    desc: "A quizz application with authentication included",
    img: "../src/assets/quizzes.png",
    element: lazy(() => import("./apps/quizzes")),
  },

  {
    id: "expense-tracker",
    name: "Expense Tracker",
    desc: "A very simple react vite application",
    img: "../src/assets/expense-tracker.png",
    element: lazy(() => import("./apps/expense-tracker")),
  },
  {
    id: "real-state",
    name: "Real State",
    desc: "A very simple react vite application",
    img: "../src/assets/real-estate.png",

    element: lazy(() => import("./apps/real-estate")),
  },
  {
    id: "product-list",
    name: "Product List",
    desc: "A very simple react vite application",
    img: "../src/assets/product-list.png",
    element: lazy(() => import("./apps/product-list")),
  },
  {
    id: "gericht-restaurant",
    name: "Gericht Restaurant",
    desc: "This restaurant landing page showcases a contemporary design developed using React, emphasizing reusable functional components and a well-organized file and folder structure. It emphasizes mastery of fundamental CSS properties such as flex for flexible layout design. Responsive design is ensured with meticulously implemented media queries, optimizing display across all devices.",
    img: "../src/assets/gericht-restaurant.png",

    element: lazy(() => import("./apps/gerich-restaurant")),
  },
  {
    id: "modern-ui-ux",
    name: "Modern UI UX",
    desc: "A very simple react vite application",
    img: "../src/assets/modern-ui-ux.png",

    element: lazy(() => import("./apps/modern-ui-ux-gpt3")),
  },
  // {
  //   id: "issue-tracker",
  //   name: "Issue Tracker",
  //   desc: "A quizz application with authentication included",
  //   element: lazy(() => import("./apps/issue-tracker")),
  // },
  // {
  //   id: "portfolio",
  //   name: "Portfolio",
  //   desc: "A very simple react vite application",
  //   element: lazy(() => import("./apps/portfolio")),
  // },
];
