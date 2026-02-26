# Project Folder Structure

This document describes the refactored folder organization for better code maintainability and scalability.

## Directory Overview

```
src/
├── pages/                  # Page-level components (full pages)
│   ├── AboutMe.js
│   ├── Awards.js
│   ├── Certification.js
│   ├── Competition.js
│   ├── Home.js
│   ├── InterestGroup.js
│   ├── Portfolio.js
│   └── Volunteer.js
│
├── components/             # Reusable components (organized by function)
│   ├── Layout/            # Layout/navigation components
│   │   ├── Footer.js
│   │   ├── NavBar.js
│   │   └── SidebarData.js
│   │
│   ├── Banners/           # Banner/header components
│   │   ├── bannerabout.js
│   │   ├── bannerintro.js
│   │   └── bannermyportfolio.js
│   │
│   ├── Projects/          # Individual project showcase components
│   │   ├── botany.js
│   │   ├── disney.js
│   │   ├── focuscrew.js
│   │   ├── journalapp.js
│   │   ├── lostresearcher.js
│   │   ├── styleshop.js
│   │   └── travellist.js
│   │
│   ├── LandingPages/      # Landing page section components
│   │   ├── landingabout.js
│   │   ├── landingawards.js
│   │   ├── landingcertification1.js
│   │   ├── landingcompp1-3.js
│   │   ├── landingigp1-2.js
│   │   └── landingvolunteerp1-4.js
│   │
│   ├── Cards/             # Card/list components
│   │   ├── aboutcat.js
│   │   ├── beleaf.js
│   │   ├── booklist.js
│   │   ├── career.js
│   │   └── stickercard.js
│   │
│   ├── Common/            # Common utility components
│   │   ├── Contact.js
│   │   ├── portfoliolanding.js
│   │   └── Skills.js
│   │
│   └── Styles/            # Component-specific stylesheets
│       ├── CardPage.css
│       ├── Contact.css
│       └── ProjectDescription.css
│
├── styles/                # Global stylesheets
│   ├── App.css
│   └── index.css
│
├── config/                # Configuration files
│   └── config.json
│
├── assets/                # Static assets
│   ├── fonts/
│   └── images/ (img/)
│
├── App.js                 # Root application component
├── index.js              # Application entry point
├── index.test.js         # Tests
├── setupTests.js         # Test setup
└── logo.svg              # Logo file
```

## Folder Purposes

### `/pages`
Contains full page components that serve as routes. Each file represents a complete page:
- AboutMe, Awards, Certification, Competition, Home, InterestGroup, Portfolio, Volunteer

### `/components`
Modular, reusable components organized by function:

- **Layout**: Navigation and layout structure (NavBar, Footer, Sidebar)
- **Banners**: Header/banner sections
- **Projects**: Individual project showcases
- **LandingPages**: Home page section components
- **Cards**: Reusable card and list item components
- **Common**: Utility components used across multiple pages
- **Styles**: Component-specific CSS files

### `/styles`
Global application styles that apply across all pages:
- App.css - Application-wide styles
- index.css - Global reset and base styles

### `/config`
Configuration files for the application:
- config.json - Application configuration

### `/assets`
Static files (images, fonts, etc.)

## Import Examples

```javascript
// Importing a page component
import Home from '../pages/Home';

// Importing a layout component
import NavBar from '../components/Layout/NavBar';

// Importing a project component
import DisneyProject from '../components/Projects/disney';

// Importing a card component
import BookList from '../components/Cards/booklist';

// Importing global styles
import '../styles/App.css';

// Importing config
import config from '../config/config.json';
```

## Benefits of This Structure

✅ **Clear separation of concerns** - Pages vs reusable components
✅ **Easy to scale** - Adding new features is straightforward
✅ **Better maintainability** - Components are grouped logically
✅ **Faster navigation** - Developers know where to find things
✅ **Reduced clutter** - No more 40+ files in one directory
✅ **Organized styles** - Global and component-specific CSS separated
✅ **Configuration centralized** - Easy to manage app settings

## Best Practices

1. **Pages** should import from `/components` subdirectories
2. **Components** should avoid cross-component imports when possible
3. **Styles** should be co-located with component folders when appropriate
4. **Config** should be imported globally at app initialization
5. When creating new components, place them in the appropriate subfolder
