# Recipe Finder

Recipe Finder is a small React app that lets you search for recipes by keyword and browse results in a clean card-based layout.

It uses **TheMealDB** public API to fetch real recipe data and maps the API shape into a custom recipe card design.

---

## Features

- 🔎 **Search by keyword**  
  Type a term (e.g. `chicken`, `pasta`, `salad`) and submit to fetch matching recipes.

- 🌐 **Real API data**  
  Uses `https://www.themealdb.com/api/json/v1/1/search.php?s=<query>` under the hood.

- ⏳ **Full async UI states**  
  Handles all four states explicitly:
  - Loading (`Grabbing Your Recipes...`)
  - Error (network/HTTP errors)
  - Empty results (`No recipes found :/`)
  - Successful results (recipe cards)

- 🍽️ **Custom recipe cards**  
  Each card shows:
  - Meal name
  - Image
  - A short ingredient list
  - A preview of the instructions
  - A link to the YouTube video for the recipe

- 💅 **Deliberate styling**  
  Card layout with consistent height and an internal scroll area for long content, so all cards stay visually aligned.

---

## Tech Stack

- React (Vite or Create React App, depending on setup)
- JavaScript (ES6+)
- CSS modules for layout and card styling
- TheMealDB public API

---

## Getting Started

Clone the repo:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm run dev
```
Then open the URL shown in your terminal (usually `http://localhost:5173` or `http://localhost:3000`).

---

## Deployment

This app can be deployed with **GitHub Pages**.

```markdown
Live demo: https://mariauh123.github.io/recipe-search/
```

---

## API

This project uses [TheMealDB](https://www.themealdb.com/) search endpoint:

```text
GET https://www.themealdb.com/api/json/v1/1/search.php?s=<query>
```
Responses are mapped into a custom recipe shape before rendering.

---

## Future Improvements

- Show full ingredient list instead of a small subset
- Add a dedicated recipe detail view (once routing is introduced)