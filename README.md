# Lab Exercise 10 — React Redux & JWT  

## 🔍 Overview  
This lab demonstrates the key concepts of **Redux** and **JWT (JSON Web Token)** using a simple React application.

The application includes:
- A **Redux Counter** (State, Store, Reducer, Actions, Dispatch)
- A **JWT Login Simulation** (Fake token stored in Redux)
- A **Clean Folder Structure**

---

## 📦 Technologies Used  
| Technology | Purpose |
|------------|----------------------|
| React      | Frontend library     |
| Redux Toolkit | State management  |
| JWT (simulated) | Authentication concept |
| JavaScript | Logic & components   |

---

## 🧠 What is Redux?  
Redux is a **state management library** used to control and share data across the application.  
It follows **three core principles**:

1. **State** → Data (like `count`, `token`)  
2. **Actions** → What should change  
3. **Reducer** → Applies the change  
4. **Dispatch** → Sends the action  
5. **Store** → Holds all state in one place  
6. **Subscribe** → UI automatically updates when state changes  

---

## 🔐 What is JWT (JSON Web Token)?  
JWT is a way to represent **authentication**.  
In this demo, we simulate JWT by storing a **fake token** in Redux — no backend required.

---

## 📂 Folder Structure  

src/
├─ components/
│ ├─ Counter.js ← Redux counter UI
│ ├─ Login.js ← JWT simulation with Redux
├─ redux/
│ ├─ store.js ← Redux store setup
│ ├─ counterSlice.js ← Redux slice for counter
│ ├─ authSlice.js ← Redux slice for JWT
├─ App.js ← Main component
└─ index.js ← Connect Redux to React


---

## ▶️ How to Run the App

```bash
npm install
npm start
