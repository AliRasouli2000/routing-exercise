# Cosmic Encyclopedia

A React app I built to practice routing with React Router. It's a simple space-themed encyclopedia where you can navigate between different pages about planets and space objects.

## What I Built

This project uses React Router DOM to handle client-side routing. The main features are:

- Dynamic routing based on URL parameters
- A navigation bar that stays consistent across pages
- A back button to navigate to previous pages
- Nested routes with a shared layout

## Tech Used

- React 19.1.1
- React Router DOM 7.9.4
- Vite for building and dev server

## Running It

1. Install dependencies:
```bash
npm install
```

2. Start the dev server:
```bash
npm run dev
```

3. Open `http://localhost:5173` in your browser

## How It Works

The app has a home page at `/` and dynamic routes like `/mars` or `/venus` that show different content based on the URL. I used React Router's `useParams` hook to grab the page name from the URL and display the matching content.

The navigation bar is in a layout component that wraps all the routes, so it shows up on every page.

## Copyright

Copyright (c) 2024 Ali Rasouli. All Rights Reserved.

This code is for portfolio demonstration purposes only. You may not use, copy, modify, or distribute this code without permission.

# Form Exercise

**Live Demo:** https://routing-exercise.vercel.app/
