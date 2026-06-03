# 🚀 Backend For Frontend (BFF) Demo

## Overview

This project demonstrates the **Backend For Frontend (BFF)** pattern using:

* React Frontend
* Node.js + Express BFF Layer
* User Service
* Product Service
* Order Service

The application compares three approaches:

1. ❌ Without BFF
2. 🌐 Web BFF
3. 📱 Mobile BFF

This helps visualize how the BFF pattern simplifies frontend development and optimizes API responses for different client applications.

---

# Architecture

## Without BFF

```text
React App
   │
   ├── User Service
   ├── Product Service
   └── Order Service
```

### Characteristics

* Frontend makes multiple API calls
* Frontend handles data aggregation
* More network requests
* More complex frontend logic

---

## Web BFF

```text
React App
    │
    ▼
 Web BFF
    │
 ┌──┼──┐
 ▼  ▼  ▼
User Product Order
```

### Characteristics

* Frontend makes one API call
* BFF aggregates service responses
* Simplified frontend
* Optimized for web dashboard requirements

---

## Mobile BFF

```text
Mobile App
    │
    ▼
 Mobile BFF
    │
 ┌───┴───┐
 ▼       ▼
User    Order
```

### Characteristics

* Returns only required mobile data
* Smaller payload
* Faster response
* Optimized for mobile devices

---

# Project Structure

```text
bff-demo/
│
├── frontend/
│   └── React Application
│
├── bff/
│   └── Express BFF Server
│
├── user-service/
│   └── User APIs
│
├── product-service/
│   └── Product APIs
│
├── order-service/
│   └── Order APIs
│
└── README.md
```

---

# Services

| Service         | Port |
| --------------- | ---- |
| Frontend        | 5173 |
| BFF             | 5000 |
| User Service    | 5001 |
| Product Service | 5002 |
| Order Service   | 5003 |

---

# API Endpoints

## User Service

```http
GET /users/1
```

---

## Product Service

```http
GET /products
```

---

## Order Service

```http
GET /orders/1
```

---

## Web BFF

```http
GET /api/web/dashboard
```

Example Response:

```json
{
  "user": {},
  "products": [],
  "orders": []
}
```

---

## Mobile BFF

```http
GET /api/mobile/dashboard
```

Example Response:

```json
{
  "userName": "Neha",
  "recentOrder": {}
}
```

---

# Features Demonstrated

## Without BFF

* Frontend directly calls services
* 3 API calls from frontend
* Frontend performs aggregation

## Web BFF

* Single API call
* Aggregated dashboard response
* Uses Promise.allSettled()

## Mobile BFF

* Client-specific response
* Reduced payload
* Optimized data transfer

## Fault Tolerance

The BFF uses:

```javascript
Promise.allSettled()
```

This ensures:

* One service failure does not break the entire response
* Partial data can still be returned
* Better user experience

---

# How To Run

## Step 1: Install Dependencies

Run inside each project folder:

```bash
npm install
```

---

## Step 2: Start User Service

```bash
cd user-service
npm start
```

Runs on:

```text
http://localhost:5001
```

---

## Step 3: Start Product Service

```bash
cd product-service
npm start
```

Runs on:

```text
http://localhost:5002
```

---

## Step 4: Start Order Service

```bash
cd order-service
npm start
```

Runs on:

```text
http://localhost:5003
```

---

## Step 5: Start BFF Server

```bash
cd bff
npm start
```

Runs on:

```text
http://localhost:5000
```

---

## Step 6: Start React Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

# Demo Flow

### 1. Without BFF

Frontend directly calls:

```text
User Service
Product Service
Order Service
```

Total Frontend Calls:

```text
3
```

---

### 2. Web BFF

Frontend calls:

```http
GET /api/web/dashboard
```

Total Frontend Calls:

```text
1
```

---

### 3. Mobile BFF

Frontend calls:

```http
GET /api/mobile/dashboard
```

Total Frontend Calls:

```text
1
```

---

# Key Learnings

* Backend For Frontend reduces frontend complexity.
* Different frontends can have different BFFs.
* BFF enables response shaping based on client requirements.
* BFF reduces the number of frontend API calls.
* BFF improves maintainability and scalability.
* Promise.allSettled() improves resiliency by handling partial failures gracefully.

---