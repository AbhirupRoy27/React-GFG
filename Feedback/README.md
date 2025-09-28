# Feedback Form

A small web app to collect feedback. You can write your name and a short message, submit it, and see feedback from others. The data is saved using my Express API connected to MongoDB Atlas.

## What you can do

- Add your feedback
- See all feedback in a clean list
- Agree (like) on feedback you like
- Try the AI Summarize button (shows a placeholder for now will add AI API integration)
- Simple and fast UI (built with React and Tailwind CSS)

## Tools used

- React + Vite (frontend)
- Tailwind CSS (styling)
- Express + MongoDB Atlas (backend API)

## Quick start

1. Make sure you have Node.js installed.
2. Open this project in your editor/terminal.
3. Install dependencies:

```
   - `npm install`
```

4. Start the dev server:

```
   - `npm run dev`
```

5. Open the link shown in the terminal (usually `http://localhost:5173`).

## Project structure

```
- `src/App.jsx` – App layout and header
- `src/pages/Feedback.jsx` – Main page (form + list)
- `src/Components/AllFeedback.jsx` – Renders all feedback
- `src/Components/FeedbackCard.jsx` – Single feedback card
- `src/utills/getFeedback.js` – Fetch feedback from API
- `src/utills/postFeedback.js` – Send new feedback to API
- `src/utills/handelform.js` – Form input and submit helpers
- `src/utills/fotmatLikes.js` – Formats large numbers for likes (e.g. 1.2k)
```

## Notes

- The "Remove" button in each card is a placeholder right now (it shows an alert). Delete support can be added later.
- The API base URL is hard-coded in `getFeedback.js` and `postFeedback.js`. If you deploy your own backend, update those URLs.

## Flow of the Application

- On page load, the app fetches feedback from the API.
- When you submit the form, it sends your data to the API.
- After a successful submit, the list refreshes automatically.

## About

Made for learning and practice. Simple, clean, and easy to understand.

## User Interface (UI)

<img width="1708" height="946" alt="Screenshot of UI @ 25-09-2025 at 10:02 PM" src="https://github.com/user-attachments/assets/9953d046-4c20-41b7-8213-3693655010e5" />
