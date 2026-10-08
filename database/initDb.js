import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load .env variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
dotenv.config({ path: path.join(projectRoot, '.env') });

const {
  DB_HOST = 'localhost',
  DB_PORT = 5432,
  DB_NAME = 'clinic',
  DB_USER = 'postgres',
  DB_PASSWORD = ''
} = process.env;

async function setupDatabase() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🏥 Sri Durgaa Clinical Laboratory - Database Setup');
  console.log(`📡 Connecting to PostgreSQL at ${DB_HOST}:${DB_PORT} as ${DB_USER}...`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Step 1: Ensure database exists
  const adminClient = new pg.Client({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: 'postgres'
  });

  try {
    await adminClient.connect();
    const checkDb = await adminClient.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [DB_NAME]
    );

    if (checkDb.rowCount === 0) {
      console.log(`⚙️ Database "${DB_NAME}" does not exist. Creating it now...`);
      await adminClient.query(`CREATE DATABASE "${DB_NAME}" ENCODING 'UTF8';`);
      console.log(`✅ Database "${DB_NAME}" created successfully!`);
    } else {
      console.log(`ℹ️ Database "${DB_NAME}" already exists.`);
    }
  } catch (err) {
    console.error('❌ Error during initial admin connection:', err.message);
    throw err;
  } finally {
    await adminClient.end();
  }

  // Step 2: Connect to the clinic database and execute schema + seed
  const clinicClient = new pg.Client({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  });

  try {
    await clinicClient.connect();
    console.log(`🔗 Successfully connected to database: "${DB_NAME}"`);

    // Execute schema.sql
    const schemaPath = path.join(__dirname, 'schema.sql');
    console.log(`📜 Executing schema from: ${schemaPath}`);
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    await clinicClient.query(schemaSql);
    console.log('✅ Schema tables, indices, and triggers successfully established!');

    // Execute seed.sql
    const seedPath = path.join(__dirname, 'seed.sql');
    console.log(`🌱 Seeding initial diagnostic tests, packages & reviews from: ${seedPath}`);
    const seedSql = fs.readFileSync(seedPath, 'utf8');
    await clinicClient.query(seedSql);
    console.log('✅ Seed data successfully imported!');

    // Step 3: Run table verification counts
    console.log('\n📊 Database Summary Verification:');
    console.log('────────────────────────────────────────────────────');

    const testsCount = await clinicClient.query('SELECT COUNT(*) FROM tests;');
    const pkgsCount = await clinicClient.query('SELECT COUNT(*) FROM health_packages;');
    const reviewsCount = await clinicClient.query('SELECT COUNT(*) FROM reviews;');
    const bookingsCount = await clinicClient.query('SELECT COUNT(*) FROM bookings;');
    const inquiriesCount = await clinicClient.query('SELECT COUNT(*) FROM inquiries;');

    console.log(` • tests:           ${testsCount.rows[0].count} diagnostic profiles`);
    console.log(` • health_packages: ${pkgsCount.rows[0].count} packages`);
    console.log(` • reviews:         ${reviewsCount.rows[0].count} patient reviews`);
    console.log(` • bookings:        ${bookingsCount.rows[0].count} bookings (ready to receive)`);
    console.log(` • inquiries:       ${inquiriesCount.rows[0].count} inquiries (ready to receive)`);
    console.log('────────────────────────────────────────────────────');
    console.log('🎉 Database initialization complete and verified!');
  } catch (err) {
    console.error('❌ Failed to initialize database:', err);
    process.exit(1);
  } finally {
    await clinicClient.end();
  }
}

setupDatabase();
