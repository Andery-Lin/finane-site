@echo off
echo Starting Backend and Frontend...

:: Start Backend in a new PowerShell window
start "Backend" powershell -NoExit -Command "cd '.\server'; node server.js"

:: Start Frontend in a new PowerShell window
start "Frontend" powershell -NoExit -Command "cd '.\sp500-breadth\src'; npm run dev"


:: Wait a few seconds before opening the browser (optional)
timeout /t 5 > nul

:: Open Microsoft Edge to the frontend
start msedge http://localhost:5173/

exit