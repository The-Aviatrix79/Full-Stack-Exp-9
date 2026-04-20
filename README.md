# 📌 Full Stack Experiment 9(RBAC)

## 👤 Student Details
- **Name:** Divyam Arora  
- **UID:** 23BAI70414  

---

## 📖 Objective
- Build a React frontend for RBAC APIs  
- Use Bootstrap + Material UI for UI design  
- Implement session-based authentication  
- Restrict UI components based on roles (USER / ADMIN)  
- Demonstrate role-based access from frontend  

---

## 🚀 Features Implemented

### 🔐 1. Login Page
- User enters **Username & Password**
- API Call: `POST /login`
- On successful authentication:
  - User Role is stored in `sessionStorage`
  - User role (USER / ADMIN) is stored
  - User is redirected to dashboard  

---

### 🛡️ 2. Role-Based Dashboard
- Dashboard content changes based on user role  
- **USER:** Limited access to basic features  
- **ADMIN:** Full access to all features  
- Unauthorized access is restricted  

---

### 🔄 3. Session-Based Authentication
- JWT token stored in `sessionStorage`  
- Token persists only during session  
- Automatically cleared on logout or session end  

---

### 🚫 4. Role-Based Access Control (RBAC)
- UI components rendered conditionally based on role  
- Protected routes implemented:
  - USER routes  
  - ADMIN routes  
- Prevents unauthorized role access  

---

### 🎨 5. UI Design
- Built using **React**
- Styled with:
  - Bootstrap  
  - Material UI  
- Responsive and user-friendly interface  

---

## 🔗 API Integration
- Frontend communicates with backend RBAC APIs  
- JWT used for authentication  
- Role information used for authorization  
- Authorization header included in protected requests  

---


## 🛠️ Tech Stack
- **Frontend:** React.js  
- **UI Libraries:** Bootstrap, Material UI  
- **Backend APIs:** RBAC with JWT authentication  
- **Storage:** sessionStorage  

---

## ✅ Outcome
- Successfully implemented RBAC in frontend  
- Demonstrated role-based UI rendering  
- Secured routes based on user roles  
- Integrated React frontend with RBAC-enabled backend APIs  
