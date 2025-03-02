# React + Vite + Tailwind CSS Basics
This project is a **sample template application** designed to explore and learn **Tailwind CSS** by recreating common UI components and layouts. It demonstrates the use of **React**, **Vite**, and **Tailwind CSS** to build responsive, flexible, and aesthetically pleasing user interfaces.

---

## 🚩 **Getting Started**

Follow the steps below to set up and run the project:

### **1. Create the Project**
Run the following commands to create a new Vite project:

```bash
npm create vite@latest my-react-app --template 
```
Choose the `react` template and press enter.

### **2. Install Tailwind CSS**
Install Tailwind CSS and its peer dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```

### **3. Initialize Tailwind CSS**
```bash
npm install tailwindcss init -p
```
This will create a ```tailwind.config.js``` file in the root of the project.

### **4. Configure Tailwind CSS**
Update the ```tailwind.config.js``` file to specify the paths to your template files:
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### **5. Add Tailwind CSS to Your Styles**
Create or edit the ```src/index.css``` file and include the following directives:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### **6. Import Tailwind CSS**
Import the ```index.css``` file into the project. Open the ```src/main.jsx``` file and add this line:
```bash
import './index.css';
``` 
The updated ```main.jsx``` file should look like this:
```bash
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### **7. Run the Development Server**
Start the development server with:
```bash
npm run dev
```

### **8. Verify Tailwind CSS**
Test if Tailwind CSS is working by replacing the ```App.jsx``` content with:
```bash
export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello, Tailwind CSS with React and Vite!
      </h1>
    </div>
  );
}
```
Run the server and you should see a styled page with a centered message.

## 📂 File Structure
```bash
src/
├── components/
│   ├── HeaderSection.jsx       # Header Section of the application
│   ├── HeroSection.jsx         # Hero Section of the application
│   ├── CompanyLogo.jsx         # Company Logo with names and logos
│   ├── ContentSection.jsx      # Content Section with feature highlights
│   ├── FeatureSection.jsx      # Feature Section with text and image layout
│   ├── FooterSection.jsx       # Footer Section with CTA and feature cards
├── App.jsx                     # Main App Component
├── main.jsx                    # React entry point
├── index.css                   # Tailwind base imports
```
## 💻 How to Run Locally
**1. Clone the repository**
```bash
git clone https://github.com/your-username/tailwind-sample-template.git
cd tailwind-sample-template
```
**2. Install dependencies**
```bash
npm install
```
**3. Run the development**
```bash
npm run dev
```
**4. Open the app in your browser at ```http://localhost:3000```**
---

## 🚀 Features Implemented

1. **Header Section**:  
   - A simple, clean and visually appealing header section.

2. **Content Section**:  
   - Highlights key features with clear and concise headings, descriptions, and icons.  
   - Responsive flexbox layout to ensure the content adapts to various screen sizes.  

3. **Feature Sections**:  
   - Includes feature-specific sections with reversed layouts for variety.  
   - Combines text and images with responsive alignment.  
   - Interactive buttons styled with Tailwind utilities.

4. **Footer Section**:  
   - Displays a final call-to-action message.  
   - Custom-styled feature cards with dynamic content placement (e.g., text, icons).  
   - Icons aligned dynamically to illustrate effective flexbox and alignment usage.  

---

## 📚 Learning Goals

- **Understand Tailwind CSS utilities**: Learn how to use classes like `flex`, `justify-between`, `text-center`, and more to create structured layouts.
- **Responsive Design**: Implement layouts that work across different screen sizes using Tailwind’s responsive utilities.
- **Custom Styling**: Use Tailwind's `bg`, `text`, `rounded`, and `shadow` utilities to style elements and components effectively.
- **Component-based Approach**: Structure the application into reusable components for better scalability and code organization.

---

## 🛠️ Technologies Used

- **React**: For building reusable UI components.
- **Vite**: As the development build tool for fast performance.
- **Tailwind CSS**: For styling the application with minimal custom CSS.

---



