# fe-solis

Made this CRA based on the requirements given to me.

Keypoints to take:
- Data Extraction
- Data Processing
- Filtering
- Sorting
- Aggregation
- Display

Used tech:
- TypeScript
- TailwindCSS

For the sake of brevity, I made components based on requirements and these components are:

- DataSearch component (Master component where it will fetch the ata from an API which I created using Express in a different repo (be-solis)
    - This presents the data extraction and data processing where the data is passed through the sub components inside
    - Used axios for fetching data

- DataFilterComponent & AggregationComponent (This is where the search input and the calculated of users and averge username field is located)
    - This presents Filtering, Aggregation and Display
    - Used react-window to optimize and enhance performance on displaying the list of users
      
- DataSortComponent (Component to sort by Ascending/Descending order by username or UserID)
    - This presents Sorting
    - Before displaying the user data, it must have sorted first then the DataSortComopnent will pass the sorted data to DataFilterComponent through props from child to parent,
      then it will be rendered on the page

Bit of design using TailwindCSS for better visualization

Steps:

- Install the packages by npm install
- Once done, in the directory, run npm start
- If successful, go to localhost:3000

Reach out to the developer for any questions or concerns!


