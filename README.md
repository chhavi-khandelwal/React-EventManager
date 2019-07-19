## Available Scripts

In the project directory, you can run:
### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## files
* eventData.js - data for plotting the event manager
* EventManager.js - It is the parent component which maintains state of the events and opened tabs.
* EventViewer.js - Child to EventManager and displays the left nav of events list and keeps updating the state of openedtabs to the parent.
* TabManager.js - Child to EventManager and keeps updating the state of focussed and opened tabs and notify the parent.
* TabScreen.js - child of TabManager. Its the screen that gets updated as per the focussed tab

## Working
* Used the concept of `LiftingUpState` in React
* if tab is already opened, click would be no-op
* If only single tab is opened, it can not be closed.
* If tab exceeds the width of manager, scroll over header is shown and every tabs' width gets compressed
* state of openedTabs is maintained as an Array of objects, which eases the maintainability to render the html which needs array to iterate over it.
