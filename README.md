# AlgoIllustrator

### A web-based interactive tool for visualizing and experimenting with various algorithms such as Bubble Sort, Binary Search, and Breadth-First Search(BFS). Built using **Next.js**, this project provides a seamless and dynamic experience for users to learn and understand algorithms by interacting with customizable charts for visualizations.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup & Installation](#setup--installation)
5. [Algorithms & Visualizations](#algorithms--visualizations)
6. [Project Structure](#project-structure)
7. [How to Use](#how-to-use)
8. [Contribution Guidelines](#contribution-guidelines)
9. [License](#license)

---

## Introduction

**AlgoIllustrator** is an educational platform where users can explore and play with different algorithms, visualizing how they work in real-time on customizable datasets. Users can modify the input data, choose specific algorithms, and observe the process step by step through intuitive animations and charts.

This project aims to provide an interactive learning experience for students, educators, and anyone interested in understanding fundamental algorithms in a fun, engaging way. Whether you’re new to algorithms or a seasoned developer, AlgoIllustrator has something to offer!

---

## Features

- **Algorithm Visualization**: Watch how different sorting algorithms work, step-by-step.
- **Customizable Data**: Create your own datasets and see how algorithms perform on different data.
- **Multiple Algorithms**: Choose from a wide range of algorithms such as Bubble Sort, Binary Search, and Breadth-First Search(BFS).
- **Real-Time Controls**: Play, pause, or step through the sorting process to observe the behavior at each stage.
- **Responsive Charts**: Visualizations adjust to screen size, making it accessible on both desktop, tablet and mobile.
- **Speed Control**: Adjust the speed of the visualization to better understand the process.
- **In-depth Descriptions**: Learn about each algorithm through detailed explanations and time complexity analysis.

---

## Tech Stack

- **Next.js**: A React-based framework for building server-rendered applications.
- **TypeScript**: For type-safe and maintainable code.
- **TailwindCSS**: Used for styling and making the site responsive.
- **ShadcnUI**: Library for rendering beautiful, components, charts, etc.
- **Neon**: Database service for managing user data.
- **Drizzle**: ORM for efficient database queries and type-safe interactions.
- **NextAuth**: Authentication solution for managing user sign-in and sessions.
- **tRPC**: For building end-to-end type-safe APIs within the application.
- **Vitest** and **Testing Library-React**: To test component functionality and algorithm logic.

---

## Setup & Installation

Follow these instructions to set up the project on your local machine.

### Prerequisites

Make sure you have the following tools installed:

- **Node.js**: v20.x or above.
- **npm**, **pnpm**, **yarn**, or **bun**: Choose your preferred package manager.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/wev1n/algoillustrator.git
```

2. Navigate to the project directory:

```bash
cd algoillustrator
```

3. Install the dependencies:

```bash
npm install
```

4. Copy the `.env.example` file to create your local environment file:

```bash
cp .env.example .env
```

_Please include any environment variables needed here, such as Database keys, etc._

5. Run the development server:

```bash
npm run dev
```

You can now visit the application at `http://localhost:3000`.

---

## Algorithms & Visualizations

AlgoIllustrator supports several algorithms, each with a detailed explanation and a step-by-step visualization. Some of the following algorithms available are as follows:

### Sorting Algorithms

1. **Bubble Sort**: A simple, comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

2. **Selection Sort**: Finds the smallest (or largest) element and moves it to the front. It is easy to understand but inefficient for large datasets.

3. **Merge Sort**: A divide-and-conquer sorting algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves.

4. **Quick Sort**: An efficient, partition-based sorting algorithm. It selects a "pivot" element and partitions the array around the pivot, with smaller elements on one side and larger on the other.

5. **Heap Sort**: A comparison-based sorting algorithm that uses a binary heap data structure, suitable for handling large datasets efficiently.

6. **Insertion Sort**: Builds the sorted array one element at a time, useful for smaller datasets and nearly sorted lists due to its simplicity and low overhead.

### Searching Algorithms

1. **Binary Search**: A searching algorithm that efficiently finds an element in a sorted array by repeatedly dividing the search interval in half.

### Graph Traversal Algorithms

1. **Breadth-First Search (BFS)**: A graph traversal algorithm that explores nodes level by level, commonly used for finding the shortest path in unweighted graphs.

2. **Depth-First Search (DFS)**: A graph traversal algorithm that explores nodes as far down a branch as possible before backtracking, useful for pathfinding and connectivity checks.

3. **Dijkstra's Algorithm**: A shortest-path algorithm for finding the minimum distance between nodes in a weighted graph, commonly used in networking and GPS systems.

More algorithms will be added, so stay tuned!

### How It Works

For each algorithm, users can:

- **Customize the Input Data**: Adjust the size, range, and randomness of the dataset.
- **Play/Pause the Animation**: Control the flow of the sorting process.
- **Step Through**: Move through each sorting step manually for closer inspection.
- **Speed Control**: Increase or decrease the animation speed.
- **Reset**: Restart the algorithm with the same or new data.

---

## Project Structure

This section provides an overview of the project’s directory structure:

- **`/src/`**: Root directory for source code files.

  - **`/app/`**: Contains the primary pages and routing logic for the application.
    - **`/_components/`**: Reusable components for visualizations, controls, and charts.
    - **`/api/`**: Backend API routes and endpoints.
  - **`/hooks/`**: Custom React hooks for shared functionality, such as handling themes and mobile detection.
  - **`/lib/`**: Utility functions and potentially any shared code for data processing.
  - **`/server/`**: Server-side utilities and code for handling backend operations.
  - **`/styles/`**: Styling files for global and component-specific styles.
  - **`/types/`**: TypeScript types and interfaces used throughout the application.
  - **`/tests/`**: Unit tests for verifying algorithm logic and frontend components.

- **`.env`** and **`.env.example`**: Environment variables for development and example configuration.
- **`drizzle.config.ts`**: Configuration for the Drizzle ORM.
- **`next.config.js`**: Next.js configuration file.
- **`tailwind.config.ts`**: TailwindCSS configuration.
- **`README.md`**: Project documentation.
- **`LICENSE.md`**: License file for the project.

---

## How to Use

1. **Choose an Algorithm**: Select from the available algorithms on the homepage.
2. **Customize Data**: Adjust the dataset using sliders to change size, randomness, or enter custom values.
3. **Start the Visualization**: Watch the algorithm sort the dataset in real time.
4. **Control the Speed**: Use the speed slider to slow down or speed up the sorting process.
5. **Analyze the Results**: Learn more about the algorithm's time and space complexity once the sorting is complete.

---

## Contribution Guidelines

I welcome contributions from everyone! Here’s how you can get involved:

1. **Fork the repository** and create a new branch for your feature.
2. **Submit pull requests** ensuring your code passes the necessary tests and linting.
3. Add appropriate documentation and tests for new features.
4. Report issues or suggest features using the **GitHub Issues** section.

### Reporting Issues

If you encounter a bug or want to request a feature, please report it through **GitHub Issues** with the following information:

- Steps to reproduce the issue.
- Screenshots (if applicable).
- Relevant system or environment details.

---

## License

This project is licensed under the **MIT License**. Please refer to the [MIT license](https://github.com/wev1n/algo-visualizer/blob/master/LICENSE.md) file for more details.
