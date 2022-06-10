import React, {useMemo, useState, useCallback} from 'react'
import { SearchOutlined } from "@ant-design/icons";
import Axios from "axios";
import { Row, Col, Input } from "antd";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ownerCellRenderer from "./OwnerCellRenderer";
import likeCellRenderer from "./LikeCellRenderer";
import actionCellRenderer from "./ActionCellRenderer";
import "antd/dist/antd.css";
import "./searchs.css";
import { reformatDate } from '../../utils';


const SearchPosts = () => {
  const [rowData, setRowdata] = useState([]);
  const gridStyle = useMemo(() => ({ height: "50vh", width: "70vw" }), []);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);

  const [columnDefs] = useState([
    {
      field: "id",
      headerName: "ID",
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      field: "owner",
      headerName: "OWNER",
      cellStyle: {
        textAlign: "left",
      },
      cellRenderer: ownerCellRenderer,
    },
    { field: "text", headerName: "TITLE" },
    { field: "likes", headerName: "LIKES", cellRenderer: likeCellRenderer },
    { field: "publishDate", headerName: "PUBLISHED DATE", valueFormatter : (row) => {
      if (!row.value) return "Error"
      return reformatDate(row.value)
    } },
    {
      field: "ACTION",
      headerName: "",
      cellRenderer: actionCellRenderer,
      width: 30,
    },
  ]);

  const config = {
    headers: {
      "app-id": "629e74f9007a8808a4995bb2",
    },
  };
  const url = "https://dummyapi.io/data/v1/post";

  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
    Axios.get(url, config).then((response) => {
      console.log(response);
      setRowdata(response.data.data);
    });
  }, []);

  return (
    <Row>
      <div className="search-div">
        <Input
          style={{ width: "20vw", "border-radius": "20px" }}
          placeholder="Search any user"
          prefix={<SearchOutlined />}
        />
      </div>

      <Row type="flex" justify="center">
        <Col span={20}>
          <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              rowSelection={"multiple"}
              pagination={true}
              paginationPageSize={10}
              onGridReady={onGridReady}
              rowHeight={62}
              domLayout={"autoHeight"}
              rowStyle={{
                "border-bottom": "#d3d3d3 6px solid",
              }}
            ></AgGridReact>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

export default SearchPosts