# Getting Started with Absence Manager App

The app was created as a coding challenge for the Crewmeister team.

## How to run the project

Clone the repository:

#### `git clone https://github.com/anastasiaBokun/absence-manager`

Then start the project in the project directory with a script

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run the tests

Run this script in the project directory:

### `yarn test`

Launches the test runner in the interactive watch mode.

## App is also published on GitHub Pages and is availible via link:

https://anastasiabokun.github.io/absence-manager/

## App description

App is based on DataGrid component from MaterialUI. Records are loaded locally from files "absences.json" and "members.json" which are located in public directory. I tried to keep the app both simple and functional. 

### Features and functionality: 

Pagination: on the start of the app ypu will see a list of ten first records. To paginate press the arrow button on right bottom of the screen.

Near the pagination button you will see a total number of absences and which of them are shown now.

Filtering: Filtering is available for all the columns, to activate column filters hover the column header, press the menu button (button consists of three points on the right of hovered column header), choose option "Filter" in drop-down list. Here you can set up filter (select column by which you need to filter, add filter value and select filtering operator).

Sorting is available for all the columns. To sort hover the header of column by which you need to sort records and press the arrow button on the right of column name.

You can also hide and show columns using the same menu which you can use for filtering. Selecting option "Hide" in drop-down will hide the selected column, option "SHow columns" will open a pop-up with a list of hidden and shown columns.

For reading Member Notes and Admitter Notes which are too long to fot in the table - just hover the beginning of the note in the table and read the full text, that approach will make the user able to read noted of almost unlimited size.

While records are loaded you'll be able to see the loading screen. You'll be able to see an error message in case of loading error. If there are no records, you'll see a screen with a specific message.

