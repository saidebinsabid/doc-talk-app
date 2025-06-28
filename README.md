# 🩺 Doc Talk

**Doc Talk** is a modern frontend healthcare appointment platform that enables users to view doctor details, check availability, and book or cancel appointments based on current week days. It also features visual analytics using Recharts, and a blog section that explains key React concepts.

Built entirely with **React.js** and styled using **Tailwind CSS + DaisyUI**, this project simulates real-world medical booking systems with dynamic interactivity and informative UI.


---
![Banner](https://github.com/saidebinsabid/doc-talk-app/blob/main/doc-talk-420.png)
---
---

## 🚀 Live Project Link
[![Live Demo](https://img.shields.io/badge/Live%20Demo-%20-%2300C853?style=for-the-badge&logo=appveyor)](https://doc-talk-420.netlify.app/)

---

## 📌 Key Features

- 🔐 **Appointment Booking System** — Users can view doctor details and book appointments based on weekly availability.
- 📊 **Data Visualization** — Bookings are visualized using **Recharts** on the My Bookings page.
- 🚫 **Duplicate Booking Prevention** — Users cannot book the same doctor more than once.
- 💡 **Smart Appointment Rules** — Appointments automatically disable based on the current day and the doctor's schedule.
- 📚 **React Blogs** — Includes an informative blog section fetched from JSON, discussing React hooks and concepts.

---

## 🧩 Project Layout

- 🧭 Navbar: Home, My Bookings, Blogs, Contact Us
- 🖼️ Hero Banner with relevant healthcare visuals
- 🧑‍⚕️ Doctor Cards displaying key info and availability
- 📈 Booking Dashboard with Recharts and Cancel Option
- 🧮 Animated Stats: Total Doctors, Patients, Reviews, Staffs

---

## 🔧 Technologies Used

- **React 19**, **React Router DOM**
- **Tailwind CSS**, **DaisyUI**
- **Recharts**, **React CountUp**, **React Toast**
- **Data Source**: Local `doctor.json` & `questions.json`

---
## 📂 Folder Structure
```
src/
├── Components/
│   ├── DoctorCart.jsx
│   ├── DoctorDetailsContainer.jsx
│   ├── BookingChart.jsx
│   └── ...
├── Pages/
│   ├── Home.jsx
│   ├── Blogs.jsx
│   ├── Booking.jsx
│   └── ...
├── Layouts/
├── Routers/
├── assets/
├── App.jsx
├── main.jsx

```
---
#### 🧩 Project Layout
- Navbar with routes: Home, My Bookings, Blogs, Contact Us  
- Doctor listing in card format with detailed modal view  
- Appointment booking redirected to dashboard with chart  
- Recharts-based doctor fee graph on My Bookings page  
- Animated stats section using React CountUp  

---

#### ✅ Key Features
- Conditional appointment booking based on weekday  
- One-time booking with toast feedback and error prevention  
- Doctor info with availability and consultation fee  
- Booking data visualized through dynamic Recharts  
- Blog section displaying Q&A fetched from local JSON  

---

#### 🔧 Additional Features
- Cancel appointment with real-time chart update  
- Empty state handling for no bookings  
- Responsive design with Tailwind & DaisyUI  
- Animated stat counters for total doctors, reviews, etc.

---

#### 🐞 Challenges Faced
- Weekday logic implementation for appointment availability  
- Rechart integration for doctor-wise appointment fees  
- Preventing duplicate booking attempts  
- Dynamic removal of chart edges after cancellation  

---

#### 🚀 Improvements
- Add Firebase or Express backend for dynamic data handling  
- Enable login system for user-specific bookings  
- Email/SMS alerts for confirmed appointments  
- Add filter/sort system for doctor categories  

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/your-username/doc-talk.git
cd doc-talk
npm install
npm run dev
```
---
## 📞 Contact

For any questions or feedback, please contact:

- Email: ssaidebin1@gmail.com 
---

Thank you for visiting Doc Talk!  
Your reliable platform to get freelance tasks done efficiently.

