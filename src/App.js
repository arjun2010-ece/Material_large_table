import React, { useEffect, useReducer } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import "./App.css";


const initialState = {
  displayedData: [],
  apiData: [],
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        displayedData: [...state.displayedData, ...action.data],
        apiData: action.data,
      };

    case "LOADMORE":
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    // width: 70
  },
  {
    field: "userId",
    headerName: "USERID",
    // width: 130
  },
  {
    field: "title",
    headerName: "title",
    // width: 130
  },
  {
    field: "body",
    headerName: "Body",
    type: "number",
    width: 390,
  },
];

const StyledDataGrid = styled(DataGrid)({
  '.css-imf0nl-MuiDataGrid-root .MuiDataGrid-iconSeparator' : {
    color: 'white'
  }
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { displayedData , apiData, page} = state;

  useEffect(() => {
    const getPosts = async () => {
      console.log("USEEFFECT RUNNING...");
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      dispatch({
        type: "FETCH",
        data: res.data,
      });
    };

    getPosts();
  }, [page]);

  const handleLoadMore = () => {
    dispatch({
      type: "LOADMORE",
      page: page + 1,
    });
  }
  
  return (
    <div className="container">
      {displayedData.length > 0 && (
        <StyledDataGrid
          rows={displayedData}
          columns={columns}
          autoHeight
          getRowId={(row) => Math.random()}
          pageSize={displayedData.length}
          rowsPerPageOptions={[5]}
          hideFooter
          hideFooterPagination
          disableColumnMenu
        />
      )}

      {apiData.length > 0 && (
        <Button variant="outlined" onClick={handleLoadMore}>
          Load More
        </Button>
      )}

      <p>{displayedData.length}</p>
    </div>
  );
}

export default App;