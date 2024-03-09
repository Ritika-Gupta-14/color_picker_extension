Color Picking Extension using Vanilla JavaScript
This Chrome extension allows users to pick a color from a webpage using the EyeDropper API. Users can click a button to activate the color picker, and the picked color is displayed in a grid and its value is copied to the clipboard.


Usage
Navigate to a webpage where you want to pick a color.

Click the extension icon in the Chrome toolbar.

Click the "Pick Color" button to activate the color picker.

The picked color will be displayed in a grid, and its value will be copied to the clipboard.

Structure
manifest.json: Contains information about the extension, including permissions and scripts.

popup.html: The HTML file for the extension's popup.

popup.js: The JavaScript file for handling interactions in the extension popup.



How it Works
The extension popup contains a button that triggers the color picking functionality.

When the button is clicked, the extension injects a content script into the active tab using the chrome.scripting.executeScript API.

The content script uses the EyeDropper API to open the color picker on the webpage and retrieve the picked color's sRGBHex value.

The picked color is then displayed in a grid, its value is shown, and it is copied to the clipboard.

Permissions
The extension requires the following permissions:

activeTab: To access the currently active tab.
storage: To store extension data (if needed).
clipboardWrite: To copy the picked color value to the clipboard.
Credits
This extension uses the EyeDropper API for color picking.
