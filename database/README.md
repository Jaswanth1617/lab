# 🏥 Sri Durgaa Clinical Laboratory - PostgreSQL Database

This directory houses the PostgreSQL database schema, seed data, and connection utilities for the Sri Durgaa Clinical Laboratory web application.

---

## 📌 Database Connection Details

| Parameter | Configuration Value |
| :--- | :--- |
| **Database Host** | `localhost` |
| **Port** | `5432` |
| **Database Name** | `clinic` |
| **Username** | `postgres` |
| **Password** | `Jaswanth1617` |
| **PostgreSQL Version** | PostgreSQL 18.x (x64) |
| **Connection String** | `postgresql://postgres:Jaswanth1617@localhost:5432/clinic` |

---

## 🏗️ Architecture & Table Schema

### 1. `tests`
Stores the complete laboratory diagnostic test catalog (e.g. CBC, KFT, LFT, Lipid Profile, Blood Sugar, Thyroid, ECG, Digital X-Ray, HIV, Pregnancy).
- `id` (VARCHAR(50), Primary Key)
- `title` & `title_ta` (Bilingual English & Tamil titles)
- `category` & `category_ta`
- `image` (Asset preview URL)
- `description` & `description_ta`
- `parameters` & `parameters_ta` (JSONB arrays of individual test analytes)
- `preparation` & `preparation_ta` (Patient fasting / preparation guidelines)
- `sample_type` & `sample_type_ta`
- `turnaround` & `turnaround_ta`
- `guidelines` & `guidelines_ta`
- `price` (NUMERIC(10,2))
- `is_active` (BOOLEAN, default TRUE)
- `created_at` & `updated_at` (TIMESTAMPTZ)

### 2. `health_packages`
Stores master wellness packages (Basic Health Checkup, Complete Health Checkup, Advanced Health Checkup).
- `id` (VARCHAR(50), Primary Key)
- `name` & `name_ta`
- `badge` & `badge_ta`
- `summary` & `summary_ta`
- `features` & `features_ta` (JSONB array of included tests)
- `note` & `note_ta`
- `is_popular` (BOOLEAN)
- `price` (NUMERIC(10,2))
- `is_active` (BOOLEAN, default TRUE)
- `created_at` & `updated_at` (TIMESTAMPTZ)

### 3. `bookings`
Stores patient appointment bookings generated through the online booking modal.
- `id` (SERIAL, Primary Key)
- `appointment_id` (VARCHAR(50), Unique - e.g. `SDCL-123456`)
- `patient_name` (VARCHAR(150), Not Null)
- `patient_phone` (VARCHAR(30), Not Null)
- `selected_test` (VARCHAR(255), Not Null)
- `booking_date` (DATE, Not Null)
- `booking_time` (VARCHAR(100), Not Null)
- `collection_type` (`'lab'` or `'home'`, Not Null)
- `home_address` (TEXT)
- `status` (`'pending'`, `'confirmed'`, `'sample_collected'`, `'in_process'`, `'report_ready'`, `'completed'`, `'cancelled'`)
- `notes` (TEXT)
- `created_at` & `updated_at` (TIMESTAMPTZ)

### 4. `inquiries`
Stores customer inquiries and messages submitted from the contact form.
- `id` (SERIAL, Primary Key)
- `name` (VARCHAR(150), Not Null)
- `phone` (VARCHAR(30), Not Null)
- `email` (VARCHAR(150))
- `service` (VARCHAR(150))
- `message` (TEXT, Not Null)
- `status` (`'new'`, `'contacted'`, `'resolved'`, `'closed'`)
- `created_at` & `updated_at` (TIMESTAMPTZ)

### 5. `reviews`
Stores verified patient testimonials with ratings and bilingual feedback.
- `id` (SERIAL, Primary Key)
- `review_code` (VARCHAR(50), Unique)
- `patient_name` (VARCHAR(150))
- `location` (VARCHAR(150))
- `rating` (INTEGER, 1 to 5)
- `test_en` & `test_ta`
- `comment_en` & `comment_ta`
- `avatar_gradient` & `initials`
- `verified` (BOOLEAN, default TRUE)
- `is_approved` (BOOLEAN, default TRUE)
- `created_at` & `updated_at` (TIMESTAMPTZ)

### 6. `lab_settings`
Key-value store for clinic operating parameters (operating hours, phone numbers, home collection radius, etc.).

---

## 🚀 How to Run & Manage

### 1. Re-initialize or Reset the Database
To reset the schema and re-seed all default data:
```bash
npm run db:setup
```

### 2. Run the Full Stack Application
Runs both the PostgreSQL REST API server (`http://localhost:5000`) and the Vite React Frontend (`http://localhost:3000`):
```bash
npm run dev
```

### 3. Run Backend Server Only
```bash
npm run server
```

---

## 📡 REST API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | PostgreSQL connectivity and health status check |
| `GET` | `/api/stats` | Aggregated record counts across all database tables |
| `GET` | `/api/tests` | List all active diagnostic tests |
| `GET` | `/api/tests/:id` | Fetch specific diagnostic test details |
| `GET` | `/api/packages` | List all active health checkup packages |
| `POST` | `/api/bookings` | Create and store a new appointment booking |
| `GET` | `/api/bookings` | Retrieve bookings list (supports `?status=pending`) |
| `GET` | `/api/bookings/:token`| Look up booking status by token (e.g. `SDCL-123456`) |
| `PATCH` | `/api/bookings/:token/status` | Update booking status (`confirmed`, `completed`, etc.) |
| `POST` | `/api/inquiries` | Save contact form message |
| `GET` | `/api/inquiries` | Retrieve contact form messages |
| `GET` | `/api/reviews` | Retrieve approved patient reviews |
| `POST` | `/api/reviews` | Submit a new patient review to PostgreSQL |
| `GET` | `/api/settings` | Retrieve laboratory profile and operating settings |
