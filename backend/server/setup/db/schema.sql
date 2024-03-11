CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE IF NOT EXISTS staff (
  uuid UUID NOT NULL DEFAULT uuid_generate_v4(), PRIMARY KEY,
  First_name TEXT NOT NULL,
  Last_name TEXT NOT NULL,
  Title TEXT NOT NULL,
  Npi_number TEXT,
  Phone_number TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patients (
  uuid UUID NOT NULL DEFAULT uuid_generate_v4(), PRIMARY KEY,
  First_name TEXT NOT NULL,
  Last_name TEXT NOT NULL,
  Date_of_birth DATE NOT NULL,
  Home_number TEXT,
  Cell_number TEXT,
  Street_address TEXT,
  City TEXT,
  State TEXT,
  Zip_code TEXT,
  Emergency_contact_name TEXT,
  Emergency_contact_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS appointments (
  uuid UUID NOT NULL DEFAULT uuid_generate_v4(), PRIMARY KEY,
  First_name TEXT NOT NULL,
  Last_name TEXT NOT NULL,
  Date_of_birth DATE NOT NULL,
  Home_number TEXT,
  Cell_number TEXT,
  Street_address TEXT,
  City TEXT,
  State TEXT,
  Zip_code TEXT,
  Emergency_contact_name TEXT,
  Emergency_contact_phone TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);