This project shows a Material UI datagrid displaying huge amounts of datas and a "Load More" button.


The datagrid has features like autoheight and sorting features.

The project uses useReducers to handle different states.

And load more button is present tilll we have data.


NOTE::

This project uses latest react 18 and useEffect runs twice even if dependency array is empty so the solution is to remove strict mode in index.js file.


MOVE SORT ARROW ICON RIGHT OR LEFT::

{
    field: "body",
    headerName: "Body",
    type: "number",  //THIS OPTION IN COLUMN OPTION MOVES ICON RIGHT OR LEFT.
    width: 390,
  },


ADD AN ICON BEFORE VALUE IN DATAGRID::

https://codesandbox.io/s/69292542-render-a-mui-x-data-grid-cell-with-a-colored-oval-with-text-icon-in-it-xoog2?file=/src/App.tsx:338-358

https://stackoverflow.com/questions/69292542/render-a-datagrid-cell-with-a-colored-oval-with-text-icon-in-it