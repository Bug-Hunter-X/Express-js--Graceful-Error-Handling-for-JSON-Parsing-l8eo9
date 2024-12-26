# Express.js: Graceful Error Handling for JSON Parsing

This repository demonstrates a common issue in Express.js applications: improper error handling during JSON parsing.  When an error occurs during JSON processing, the server should respond with a meaningful error message rather than a generic 500 error.

The `bug.js` file contains code that reproduces this issue. The `bugSolution.js` file provides a corrected version with improved error handling.

## Bug Description

The original code attempts to parse JSON data received from a POST request.  However, if the parsing fails due to invalid JSON, the server responds with a generic 500 error, providing no context for debugging.

## Solution

The corrected code includes robust error handling within the `try...catch` block. If an error occurs during JSON parsing, the server returns a more informative error response (e.g., a 400 Bad Request) including details about the failure. This allows developers to identify and fix issues more efficiently.