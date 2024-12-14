# Node.js Server Not Starting Bug

This repository demonstrates a common issue in Node.js where a server fails to start or listen on the specified port.  The bug is caused by incorrect handling of the `server.listen()` method or a port conflict. The solution provides a way to gracefully handle port binding issues and error handling.

## Bug
The provided `server.js` file attempts to start a simple HTTP server on port 8080.  However, if the port is already in use, the server will fail to start without any clear indication of the error. 

## Solution
The `serverSolution.js` file fixes the issue by using the `error` event listener for the `server` object.  This listener catches any errors during the `server.listen()` call, providing more informative error messages and allowing for better handling of port conflicts.  The solution also includes a check for whether the port is already in use before attempting to start the server.