# 🌟 IES SYP Congress Website Remake 🌟

Welcome to the **IES SYP Congress Website Remake**! This project is a modern, responsive, and feature-rich website tailored for the IEEE Industrial Electronics Society's Students and Young Professionals Congress. 

It is a revamped version of the **[TSYP11 Repository](https://github.com/hichemfantar/TSYP-11-Congress-Website)**, designed to be more flexible, user-friendly, and easily customizable for other IEEE events. Whether you're organizing a conference, workshop, or congress, this project provides a robust foundation to showcase event details, speakers, sponsors, and more.

---

## 📋 Table of Contents

- [🌐 Website Pages](#-website-pages)
- [📦 Installation](#-installation)
- [💻 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [🛠️ Technologies Used](#️-technologies-used)
- [🤝 Contributing](#-contributing)

---

## 🌐 Website Pages

- **Home Page**: Overview of the event, speakers, and sponsors.
- **About Us**: Details about the IEEE IES and the Congress.
- **Speakers**: Profiles of keynote speakers.
- **Tunisia**: Information about the host country.
- **Survival Guide**: Essential tips for attendees.
- **Contact Us**: Reach out to the organizing team.

---

## 📦 Installation

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ies-syp-Congress-Website-Remake.git
   cd ies-syp-Congress-Website-Remake
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   yarn dev
   ```

4. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

---

## 💻 Usage

### Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Run Production Build**:
  ```bash
  npm run start
  ```
- **Lint Code**:
  ```bash
  npm run lint
  ```

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

---

## 📂 Project Structure

```
ies-syp-Congress-Website-Remake/
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── (home)/        # Home page components
│   │   ├── about-us/      # About Us page components
│   │   ├── speakers/      # Speakers page components
│   │   ├── tunisia/       # Tunisia page components
│   ├── components/        # Reusable UI components
│   ├── constants/         # Static data (e.g., speakers, sponsors)
│   ├── styles/            # Global and component-specific styles
│   └── utils/             # Utility functions
├── .env.local.example     # Example environment variables
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

---

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [FontAwesome](https://fontawesome.com/), [Lucide](https://lucide.dev/)
- **Animations**: [React Awesome Reveal](https://react-awesome-reveal)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Maps**: [Google Maps Embed API](https://developers.google.com/maps/documentation/embed)

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork the Repository**.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Changes**:
   ```bash
   git commit -m "Add your message here"
   ```
4. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request**.

---

### 🌟 Show Your Support

If you like this project, please ⭐ the repository and share it with others!

---