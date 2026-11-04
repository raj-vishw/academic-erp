# CampusHub Academic ERP

CampusHub is a responsive student portal built with React and Vite. It gives students one place to view their academic overview, courses, attendance, exams, cafeteria meal tokens, notifications, and account settings.

## Features

- Dashboard with semester statistics, recently visited courses, and latest updates
- Course cards with schedules, instructors, rooms, credits, and class sizes
- Course-wise attendance progress with minimum-attendance warnings
- Upcoming exam schedule, previous results, and past exam papers
- Cafeteria menu filtering and meal-token booking interactions
- Categorised notifications with mark-all-as-read support
- Profile, security, and notification settings screens
- Responsive layout for desktop, tablet, and mobile screens
- Client-side routing with React Router
- Accessible keyboard focus states and reusable shared layout components

> **Note:** This is currently a frontend prototype. The displayed academic records are mock data, and actions such as login, saving settings, downloading papers, and QR scanning are not connected to a backend yet.

## Tech stack

- React 19
- Vite
- React Router
- Lucide React
- CSS
- ESLint

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Project structure

```text
src/
├── App.jsx                 # Application routes
├── main.jsx                # React entry point
├── index.css               # Global design system and responsive styles
├── components/
│   ├── Layout.jsx          # Shared application shell
│   ├── Sidebar.jsx         # Main navigation
│   └── Topbar.jsx          # Header, notifications, and profile summary
└── pages/
    ├── Login.jsx
    ├── Dashboard.jsx
    ├── Courses.jsx
    ├── Attendance.jsx
    ├── ExamPaper.jsx
    ├── Cafeteria.jsx
    ├── Notifications.jsx
    └── Settings.jsx
```

## Application routes

| Route | Screen |
| --- | --- |
| `/login` | Login screen |
| `/dashboard` | Academic dashboard |
| `/courses` | Enrolled courses |
| `/attendance` | Attendance records |
| `/exam-paper` | Exams, results, and papers |
| `/cafeteria` | Menu and meal-token booking |
| `/notifications` | Notification centre |
| `/settings` | Profile and account settings |

## Future improvements

- Add a backend API and persistent database
- Implement real authentication and protected routes
- Persist profile, notification, and cafeteria changes
- Connect exam-paper downloads and QR-code verification
- Add automated component and end-to-end tests
