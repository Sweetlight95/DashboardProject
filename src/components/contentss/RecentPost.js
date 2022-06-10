  import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
  } from "react";
  import { useFormik } from "formik";
  import Axios from "axios";
  import { Row, Col, Input } from "antd";
  import { AgGridReact } from "ag-grid-react";
  import "ag-grid-community/dist/styles/ag-grid.css";
  import "ag-grid-community/dist/styles/ag-theme-alpine.css";
  import nameCellRenderer from "../search/NameCellRender";
  import actionCellRenderer from "../search/ActionCellRenderer";
  import "antd/dist/antd.css";
  import axios from "axios";
  import {BsFillHeartFill} from 'react-icons/bs'
  
  //Table for post 
  const UserTable = () => {
    const gridRef = useRef();
    const [rowData, setRowdata] = useState([]);
    const [userFullData, setUserFullData] = useState([]);
    const userID = useRef("");
   
    const [isModalVisible, setIsModalVisible] = useState(false);
    const gridStyle = useMemo(() => ({ height: "50vh", width: "50vw" }), []);
    const defaultColDef = useMemo(() => {
      return {
        sortable: true,
        resizable: true,
        flex: 1,
        minWidth: 80,
      };
    }, []);
  
    const [columnDefs] = useState([
      {
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      { field: "title", headerName: "TITLE", width: 40 },
      {
        field: "data",
        headerName: "OWNER",
        cellStyle: {
          textAlign: "left",
        },
        cellRenderer: nameCellRenderer,
      },
      {
        field: "data",
        headerName: "PUBLISHED DATE",
        cellStyle: {
          textAlign: "left",
        },
        cellRenderer: nameCellRenderer,
      },
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
    const url = "https://dummyapi.io/data/v1/user?limit=40";
  
  
   
    const onGridReady = useCallback((params) => {
    
      Axios.get(url, config).then((response) => {
  
        setRowdata(response.data.data);
      });
    }, []);
  
    const onSelectionChanged = useCallback(() => {
      const selectedRows = gridRef.current.api.getSelectedRows();
  
      if (selectedRows.length > 0) {
        userID.current = selectedRows[0].id;
        setIsModalVisible(true);
        console.log(selectedRows[0].id);
      } else {
        setIsModalVisible(false);
      }
  
      if (userID.current) {
        const userFullUrl = `https://dummyapi.io/data/v1/user/${userID.current}`;
        Axios.get(userFullUrl, config).then((response) => {
          console.log(response.data)
          setUserFullData(response.data);
        });
      }
    }, []);
  
    return (
      <Row>
        <Row style={{padding: '0rem 2rem'}}>
          <Col>
            <div className="ag-theme-alpine" style={gridStyle}>
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowSelection={"single"}
                pagination={true}
                paginationPageSize={10}
                onGridReady={onGridReady}
                rowHeight={58}
                onSelectionChanged={onSelectionChanged}
                rowStyle={{
                  "border-bottom": "#d3d3d3 6px solid",
                }}
              ></AgGridReact>
            </div>
          </Col>
        </Row>
        {isModalVisible ? <UserData values={userFullData} /> : null}
      </Row>
    );
  };
  
  export { UserTable };
  
  const UserData = (props) => {
    
  
    const deleteButton = () => {
      const config = {
        headers: {
          "app-id": "629e74f9007a8808a4995bb2",
        },
      };    
      const deleteUrl = `https://dummyapi.io/data/v1/post/${props.values.id}`;
  
      Axios.delete(deleteUrl, config).then((response) => {
        console.log(response.data, "Deleted" )
      })
     
    }
    useEffect(() => {}, []);
    return (
      <div style={{  height: "50vh", width: "20vw", marginLeft: '1rem', background: '#FFFFFF', boxShadow: '0px 0px 7px 3px rgba(40, 40, 40, 0.03)',    borderRadius: '4px', height: '28.3rem' }} >
        <div style={{padding: '1rem 1.4rem'}}>
          <div>
            <img src={props.values.picture} alt='' style={{height: '6rem', width: "5rem", borderRadius: '6px'}} />
          </div>
         
          <p style={{color: '#051a2e', fontSize: '10px', fontWeight: 400}}>adult Labrador retriever</p>
          <p style={{color: '#dd3c3c', fontSize: '10px', fontWeight: 400}} ><BsFillHeartFill style={{color: 'red'}}/>96 Likes</p>

          <p style={{color: '#afc2d4', fontSize: '7px', fontWeight: 600}}>TAGS</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <p style={{color: '#607485', fontSize: '7px', fontWeight: 600, backgroundColor: '#fafcfe', borderRadius: '11px', border: '0.7px solid #4799eb', height: '1rem', width: '4rem', textAlign: 'center'}}>ANIMAL</p>
            <p style={{color: '#607485', fontSize: '7px', fontWeight: 600, backgroundColor: '#fafcfe', borderRadius: '11px', border: '0.7px solid #4799eb', height: '1rem', width: '2rem', textAlign: 'center'}}>DOG</p>
            <p style={{color: '#607485', fontSize: '7px', fontWeight: 600, backgroundColor: '#fafcfe', borderRadius: '11px', border: '0.7px solid #4799eb', height: '1rem', width: '6rem', textAlign: 'center'}}>GOLDEN RETRIEVER</p>
          </div>
          <hr />
          <h3 style={{color: '#6f6d6d', fontSize: '10px', fontWeight: 400}}>OWNER</h3>
          <hr/>
          <div>
            <img src={props.values.picture} alt='' style={{height: '6rem', width: "5rem", borderRadius: '6px'}} />

          </div>
          <div>
          <label style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}> FULL NAME </label>
          <div style={{ fontWeight: 400, fontSize: '10px', color: '#051A2E'}}>
            {" "}
            {props.values.firstName} {props.values.lastName}{" "}
          </div>
          
  
          <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}> PHONE NUMBER </label>
          <div style={{fontWeight: 400,
  fontSize: '9.70064px', color: '#051A2E'}} > {props.values.phone} </div>
          </div>

          </div>
        
     </div>
    
    );
  };
  
  export { UserData };
  
  const RecentPost = () => {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "10%" }}>
        <UserTable />
       
      </div>
    );
  };
  


export default RecentPost