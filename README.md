# Pokédex Lite

A modern and responsive Pokédex web application built using **Next.js**, **TypeScript**, **Tailwind CSS**, **React Query**, and **PokéAPI**.

## 🚀 Live Demo

🔗 **Deployment URL:** https://pokedex-lite-flax.vercel.app/

## 📂 GitHub Repository

🔗 **Repository:** https://github.com/Aryan0512398/pokedex-lite

---

## ✨ Features

### Core Features

* Browse Pokémon with pagination
* Search Pokémon by name
* Filter Pokémon by type
* View detailed Pokémon information in a modal
* Mark Pokémon as favorites
* Persist favorites using Local Storage
* Responsive design for desktop, tablet, and mobile devices
* Loading skeletons while fetching data
* Error handling for failed API requests

### UI Enhancements

* Smooth animations using Framer Motion
* Pokémon type badges with color coding
* Interactive favorite button
* Modern card-based layout
* Responsive modal design

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* ShadCN UI

### Data Fetching

* React Query (@tanstack/react-query)
* Axios

### Animation

* Framer Motion

### API

* PokéAPI

---

## 📁 Project Structure

```text
src/
├── app/
├── components/
│   ├── PokemonCard.tsx
│   ├── PokemonModal.tsx
│   ├── SearchBar.tsx
│   ├── TypeFilter.tsx
│   └── PokemonCardSkeleton.tsx
│
├── hooks/
│   ├── usePokemon.ts
│   ├── usePokemonDetails.ts
│   ├── usePokemonByType.ts
│   └── useFavorites.ts
│
├── lib/
│   ├── api.ts
│   └── typeColors.ts
│
└── public/
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd pokedex-lite
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🏗️ Production Build

Build the application:

```bash
npm run build
```

Run production server:

```bash
npm start
```

---

## 🌐 API Used

### PokéAPI

https://pokeapi.co

Endpoints used:

* `/pokemon`
* `/pokemon/{name}`
* `/type`
* `/type/{type}`

---
---

## 🔮 Future Improvements

* Dark Mode
* Infinite Scrolling
* Pokémon Comparison Feature
* OAuth Authentication
* Advanced Filtering

---

## 👨‍💻 Author

**Aryan Gupta**

Frontend Developer Assignment Submission
