// This is the initial script to open the electron app window
const {app, BrowserWindow, Menu} = require('electron');

let mainWindow;
let addWindow;
//
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
}

app.on('ready', createWindow)
//
// // Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// Handle create add window
function createAddWindow(){
  // Create the browser window.
  addWindow = new BrowserWindow({width: 300, height: 200, title: 'Add shopping list item'})

  // and load the index.html of the app.
  addWindow.loadFile('addWindow.html')

  // Garbage collection handle
  addWindow.on('close', function(){
    addWindow = null;
  })
}

const mainMenuTemplate = [
  {
    label: 'File',
    submenu:[
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' :
        'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];
