# 🩸 Blood Bank Management System  

A simple and efficient backend application built using **Node.js**, **Express.js**, and **MongoDB** to manage blood donors, blood stock, and blood availability.

This project helps in:  
✔ Managing donor information  
✔ Maintaining blood stock  
✔ Checking blood availability instantly  
✔ Providing simple APIs for CRUD operations  

---

## 🚀 Features  
### 🔹 Donor Management
- Add new donor  
- Fetch all donors  
- Store name, age, blood group, phone  

### 🔹 Blood Stock Management
- Add blood stock  
- Update units  
- Fetch available stock  

### 🔹 Check Blood Availability
- Check if a blood group is available or not  

---

## 🛠️ Tech Stack  
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- Postman (API testing)

---

## 📁 Project Structure
```
backend/
│── models/
│   ├── Donor.js
│   └── BloodStock.js
│── server.js
│── package.json
│── .gitignore
│── README.md
```

---

## 📌 API Endpoints

### 🧑‍🤝‍🧑 Donor APIs  

| Method | Endpoint  | Description        |
|--------|-----------|--------------------|
| POST   | `/donor`  | Add new donor      |
| GET    | `/donor`  | Get all donors     |

**Sample Donor Request (POST):**
```json
{
  "name": "Sejal Alone",
  "age": 22,
  "bloodGroup": "A+",
  "phone": "9876543210"
}
```

---

### 🩸 Blood Stock APIs  

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| POST   | `/blood-stock`   | Add blood stock      |
| GET    | `/blood-stock`   | Get all stock        |

**Sample Stock Request (POST):**
```json
{
  "bloodGroup": "A+",
  "units": 5
}
```

---

### 🔍 Check Blood Availability  

| Method | Endpoint                           | Description           |
|--------|-------------------------------------|-----------------------|
| GET    | `/check-availability/:group`        | Check blood stock     |

**Example:**  
```
GET /check-availability/A+
```

---

## ▶️ Run Locally

### 1️⃣ Clone repo:
```
git clone https://github.com/SejalHub/Blood-Bank-Management-System.git
```

### 2️⃣ Install dependencies:
```
npm install
```

### 3️⃣ Start the server:
```
node server.js
```

### 4️⃣ Test APIs in Postman.

---

## 👩‍💻 Developer  

**Sejal Alone**  
Backend Developer | MCA Student  
📧 Email: **sejalalone03@gmail.com**  
🔗 GitHub: **https://github.com/SejalHub**
