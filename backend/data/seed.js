/**
 * seed.js — Seeds LP Academy Karad courses and teachers into MongoDB
 * Usage: node seed.js
 */
require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const Course = require('../models/Course');
const coursesData = require('./courses.json');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/lp_academy';

async function seed() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB for seeding LP Academy data...');

    // Clear existing and seed new
    await Course.deleteMany({});
    console.log('Cleared existing courses.');

    const seedCourses = coursesData
      .filter(c => c.id !== 'hostel-facility')
      .map(c => ({
        grade: c.targetClasses,
        subjects: c.subjects,
        startDate: '2026-06-15',
        price1Month: Math.round(c.feePerYear / 12),
        price6Months: Math.round(c.feePerYear / 2),
      }));

    await Course.insertMany(seedCourses);
    console.log(`Successfully seeded ${seedCourses.length} LP Academy courses.`);

    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

if (require.main === module) {
  seed();
}

module.exports = seed;
