import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Male Users
  {
    email: "arjun.sharma@example.com",
    fullName: "Arjun Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    email: "rahul.verma@example.com",
    fullName: "Rahul Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "rishi.patel@example.com",
    fullName: "Rishi Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "vivek.menon@example.com",
    fullName: "Vivek Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "siddharth.rao@example.com",
    fullName: "Siddharth Rao",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "abhishek.nair@example.com",
    fullName: "Abhishek Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "karthik.reddy@example.com",
    fullName: "Karthik Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  // Female Users
  {
    email: "aarti.sharma@example.com",
    fullName: "Aarti Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    email: "priya.verma@example.com",
    fullName: "Priya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "ananya.patel@example.com",
    fullName: "Ananya Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "kavya.menon@example.com",
    fullName: "Kavya Menon",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "isha.rao@example.com",
    fullName: "Isha Rao",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "sneha.nair@example.com",
    fullName: "Sneha Nair",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "meera.reddy@example.com",
    fullName: "Meera Reddy",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "radhika.iyer@example.com",
    fullName: "Radhika Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
