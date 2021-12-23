const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 525,
        height: 700,
        fullscreen: false,
        resizable: false,
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.loadURL('http://localhost:3000')

    // mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) 
            createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') 
        app.quit()
})