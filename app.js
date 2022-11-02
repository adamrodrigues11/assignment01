/*
 * File: c:\Users\jsolomon11\JBS\Courses\SSD\Intake28\Node\Assignments\Solutions\Node-A01-GitToNodeYou\SSD28-A01-GitToNodeYou\index.js
 * Created Date: Friday, October 28th 2022, 11:56:34 am
 * Author: Josh Solomon
 * Copyright (c) 2022 Josh Solomon
 */

// Set strict mode
"use strict";

// * Load the core HTTP module so that we can create a server
const http = require('http');

// * Load the file helper functions with object destructuring from utils
const {loadProfile, loadStatic} = require("./utils/filerHelper.js");

// hostname and port are needed in order for the http server to listen for requests
const hostname = "127.0.0.1";
const port = 3000;

// Initialize our server
const server = http.createServer((req, res) => {
  // branch based on the URL of the request
  switch (req.url) {
    // Home page
    // * Add a case that responds to / which sends "Hello Node Server" with a 200
    case "/":
        console.log("Home Page");
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.end("Hello Node Server");
      
    // Profiles Listing Page
    // * Add a case that responds to /profiles which sends "Profiles List" with a 200
    case "/profiles":
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end("<h1>Profiles List</h1>");
        break;
    
    //   Individual Profile
    case "/profiles/josh":
        console.log("Josh is here.  Loading profile...");
        loadProfile(req, res);
        break;

    case "/profiles/adam":
        console.log("Adam is here.  Loading profile...");
        loadProfile(req, res);
        break;

    case "/profiles/cat":
        console.log("Cat is here.  Loading profile...");
        loadProfile(req, res);
        break;
      
    case "/profiles/mike":
        console.log("Mike is here.  Loading profile...");
        loadProfile(req, res);
        break;

    //   Unhandled URL
    default:
      // Handle static requests
      const validStaticTypes = ["images", "styles", "scripts"];
      const pathSegments = req.url.split("/");
      if (validStaticTypes.includes(pathSegments[3])) {
        loadStatic(req, res);
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File not found");
      }
  }
});

// * Set the HTTP server to listen on port, hostname as declared above
server.listen(port, hostname, () => {
  console.log(`Serving is running at http://${hostname}.${port}/`);
});

