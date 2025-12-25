## FinEdge – Personal Finance & Expense Tracker API


A Node.js based FinEdge – Personal Finance & Expense Tracker API that allows users to securely manage income, expenses, budgets and view financial summaries.

---

## FEATURES

* User Registration & Login with JWT Authentication
* User-wise Transaction Management
* Income / Expense Tracking
* Monthly Financial Summary (Income, Expense, Balance)
* File-based JSON Data Persistence
* Modular MVC Architecture
* Request Logging, Validation & Global Error Handling
* Analytics & Reporting
* Environment Variable Configuration

---

## TECH STACK

* Node.js
* Express.js
* JWT Authentication
* bcryptjs for password hashing
* fs/promises for JSON database
* UUID for unique IDs
* Jest & Supertest for testing

---

## PROJECT STRUCTURE

src/
app.js
routes/
userRoutes.js
transactionRoutes.js
controllers/
userController.js
transactionController.js
services/
userService.js
transactionService.js
models/
userModel.js
transactionModel.js
middleware/
auth.js
logger.js
validator.js
errorHandler.js
utils/
analytics.js
data/
users.json
transactions.json

---

## SETUP INSTRUCTIONS

1. Clone Repository
   git clone [https://github.com/your-username/finance-manager-api.git](https://github.com/your-username/finance-manager-api.git)
   cd finance-manager-api

2. Install Dependencies
   npm install

3. Create .env file
   JWT_SECRET=finance_super_secret_key

4. Start Server
   npm run dev

Server runs on [http://localhost:5000](http://localhost:5000)

---

## API ENDPOINTS

AUTHENTICATION
POST   /users/register   Register new user
POST   /users/login      Login user

TRANSACTIONS (Protected)
POST   /transactions     Add income or expense
GET    /transactions     Fetch all user transactions
PATCH  /transactions/:id Update transaction
DELETE /transactions/:id Delete transaction

Pass JWT Token in Header:
Authorization: Bearer <token>

ANALYTICS
GET /summary   Fetch income, expense and balance

---

## SAMPLE TRANSACTION BODY

{
"type": "income",
"category": "Salary",
"amount": 50000,
"date": "2025-01-10"
}

---

## SECURITY

* Passwords hashed using bcryptjs
* JWT tokens valid for 1 day
* All transaction routes protected

---

## LICENSE

MIT License © 2025
