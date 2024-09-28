# Rental Management System (Backend)

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.x-green)
![Express](https://img.shields.io/badge/Express-v4.x-orange)


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Database Connection](#database-connection)
- [Room Model](#room-model)
- [API Endpoints](#api-endpoints)
  - [Create a Room](#create-a-room)
  - [Get All Rooms](#get-all-rooms)
  - [Get Room by ID](#get-room-by-id)
  - [Update Room by ID](#update-room-by-id)
  - [Delete Room by ID](#delete-room-by-id)
- [Routing](#routing)
- [Starting the Server](#starting-the-server)

## Overview

The **Rental Management System** backend is designed to manage rental properties and rooms. This application provides a RESTful API for creating, updating, deleting, and retrieving room details. It is built using **Node.js**, **Express**, and **MongoDB**, leveraging **Mongoose** for data modeling and interaction with MongoDB.

## Features

- **Room Management**: Create, read, update, and delete room records.
- **MongoDB Integration**: Uses MongoDB to store room data.
- **RESTful API**: Provides endpoints for managing room information.
- **Error Handling**: Comprehensive error handling for API responses.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing room data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Nodemon**: Development tool for automatic server restarts.

## Project Structure

```bash
rntMgmt-Vishal/
├── config/
│   └── db.js                # MongoDB connection configuration
├── controllers/
│   └── roomController.js     # Room controller with business logic
├── models/
│   └── roomModel.js          # Room schema using Mongoose
├── routes/
│   └── roomRoutes.js         # API routes for room management
├── server.js                 # Main entry point for the application
├── package.json              # Project metadata and dependencies
└── README.md                 # Documentation
