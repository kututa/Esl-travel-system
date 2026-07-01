# ✈️ ESL Travel Management System (TRMS)

A modern React-based dashboard for managing, tracking, and monitoring employee travel requests within an organization. The application provides a clean, responsive interface for handling travel approvals, monitoring request statuses, and viewing travel-related metrics.

## 🚀 Features

* Dashboard with travel request statistics

  * Total Requests
  * Approved Requests
  * Pending Requests
  * Rejected Requests
  * Expense Summary
* Fixed header and sidebar navigation
* Responsive dashboard layout
* Employee travel requests table
* Color-coded status badges
* Reusable React components
* Component-based styling using JavaScript objects
* Fast development with Vite

---

## 🛠️ Tech Stack

* **Frontend:** React 18+
* **Build Tool:** Vite
* **Icons:** React Icons
* **Styling:** Inline JavaScript object styling (Component-based)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── SideBar.jsx
│   ├── DashboardCard.jsx
│   ├── TravelTable.jsx
│   └── StatusBadge.jsx
├── data/
│   └── travelRequests.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/kututa/Esl-travel-system.git
```

Navigate into the project folder:

```bash
cd Esl-travel-system
```

Install dependencies:

```bash
npm install
```

Install React Icons:

```bash
npm install react-icons
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

---

## 📸 Dashboard Modules

* Dashboard Overview
* Travel Requests
* Reports
* Approval Queue
* Expense Management
* Analytics
* Notifications
* Calendar
* Profile
* Settings

---

## 🎨 Styling

The project uses **component-level styling** with JavaScript style objects. Each component manages its own styles, making the codebase easier to maintain and reducing styling conflicts.

Example:

```jsx
const headerStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  zIndex: 1000,
};
```

---

## 🔮 Future Improvements

* User authentication
* Role-based access control
* Backend integration
* Database support
* Email notifications
* PDF report generation
* Search and filtering
* Dark mode
* Mobile optimization

---

## 👨‍💻 Author

**Vincent Kututa Alex**

Computer Science Graduate | Full Stack Web Developer

GitHub: [https://github.com/kututa](https://github.com/kututa)

---

## 📄 License

This project is intended for educational and portfolio purposes.
