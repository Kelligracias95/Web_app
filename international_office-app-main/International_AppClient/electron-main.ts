import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html file
  mainWindow.loadFile('www/index.html');

  // Open DevTools
  mainWindow.webContents.openDevTools();

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null!;
  });
}

// Create window when Electron is ready
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Create a new window when the app is activated (e.g., clicked in the dock on macOS)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
