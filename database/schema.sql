-- ========================================================
-- SRI DURGAA CLINICAL LABORATORY (PONNERI)
-- PostgreSQL Database Schema
-- Database: clinic
-- ========================================================

-- Extensions not required (using standard SERIAL and VARCHAR keys)


-- Trigger function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION set_updated_at_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 1. TESTS TABLE
DROP TABLE IF EXISTS tests CASCADE;
CREATE TABLE tests (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    title_ta VARCHAR(255),
    category VARCHAR(100) NOT NULL,
    category_ta VARCHAR(100),
    image VARCHAR(255),
    description TEXT,
    description_ta TEXT,
    parameters JSONB DEFAULT '[]'::jsonb,
    parameters_ta JSONB DEFAULT '[]'::jsonb,
    preparation TEXT,
    preparation_ta TEXT,
    sample_type VARCHAR(255),
    sample_type_ta VARCHAR(255),
    turnaround VARCHAR(255),
    turnaround_ta VARCHAR(255),
    guidelines TEXT,
    guidelines_ta TEXT,
    meta1 VARCHAR(100),
    meta1_ta VARCHAR(100),
    meta2 VARCHAR(100),
    meta2_ta VARCHAR(100),
    icon_type VARCHAR(50),
    price NUMERIC(10,2) DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_tests_updated_at
BEFORE UPDATE ON tests
FOR EACH ROW EXECUTE FUNCTION set_updated_at_timestamp();

CREATE INDEX idx_tests_category ON tests(category);
CREATE INDEX idx_tests_active ON tests(is_active);

-- 2. HEALTH PACKAGES TABLE
DROP TABLE IF EXISTS health_packages CASCADE;
CREATE TABLE health_packages (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    name_ta VARCHAR(255),
    badge VARCHAR(100),
    badge_ta VARCHAR(100),
    summary TEXT,
    summary_ta TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    features_ta JSONB DEFAULT '[]'::jsonb,
    note TEXT,
    note_ta TEXT,
    is_popular BOOLEAN DEFAULT FALSE,
    price NUMERIC(10,2) DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_packages_updated_at
BEFORE UPDATE ON health_packages
FOR EACH ROW EXECUTE FUNCTION set_updated_at_timestamp();

CREATE INDEX idx_packages_active ON health_packages(is_active);

-- 3. BOOKINGS / APPOINTMENTS TABLE
DROP TABLE IF EXISTS bookings CASCADE;
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    appointment_id VARCHAR(50) UNIQUE NOT NULL,
    patient_name VARCHAR(150) NOT NULL,
    patient_phone VARCHAR(30) NOT NULL,
    selected_test VARCHAR(255) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time VARCHAR(100) NOT NULL,
    collection_type VARCHAR(50) NOT NULL DEFAULT 'lab' CHECK (collection_type IN ('lab', 'home')),
    home_address TEXT,
    status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'sample_collected', 'in_process', 'report_ready', 'completed', 'cancelled')),
    notes TEXT,
    primary_wa_url TEXT,
    secondary_wa_url TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_bookings_updated_at
BEFORE UPDATE ON bookings
FOR EACH ROW EXECUTE FUNCTION set_updated_at_timestamp();

CREATE INDEX idx_bookings_appointment_id ON bookings(appointment_id);
CREATE INDEX idx_bookings_phone ON bookings(patient_phone);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_created ON bookings(created_at DESC);

-- 4. INQUIRIES / CONTACT MESSAGES TABLE
DROP TABLE IF EXISTS inquiries CASCADE;
CREATE TABLE inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(150),
    service VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'resolved', 'closed')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_inquiries_updated_at
BEFORE UPDATE ON inquiries
FOR EACH ROW EXECUTE FUNCTION set_updated_at_timestamp();

CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_created ON inquiries(created_at DESC);

-- 5. REVIEWS / TESTIMONIALS TABLE
DROP TABLE IF EXISTS reviews CASCADE;
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    review_code VARCHAR(50) UNIQUE,
    patient_name VARCHAR(150) NOT NULL,
    location VARCHAR(150),
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    test_en VARCHAR(255),
    test_ta VARCHAR(255),
    category VARCHAR(50) DEFAULT 'service',
    date_text_en VARCHAR(100),
    date_text_ta VARCHAR(100),
    initials VARCHAR(10),
    avatar_gradient VARCHAR(255),
    verified BOOLEAN DEFAULT TRUE,
    comment_en TEXT NOT NULL,
    comment_ta TEXT,
    is_approved BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_reviews_updated_at
BEFORE UPDATE ON reviews
FOR EACH ROW EXECUTE FUNCTION set_updated_at_timestamp();

CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_approved ON reviews(is_approved);
CREATE INDEX idx_reviews_created ON reviews(created_at DESC);

-- 6. LAB CLINIC SETTINGS (Key-Value)
DROP TABLE IF EXISTS lab_settings CASCADE;
CREATE TABLE lab_settings (
    setting_key VARCHAR(100) PRIMARY KEY,
    setting_value JSONB NOT NULL,
    description TEXT,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER trg_settings_updated_at
BEFORE UPDATE ON lab_settings
FOR EACH ROW EXECUTE FUNCTION set_updated_at_timestamp();
