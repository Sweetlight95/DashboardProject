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

//Table for users
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
      headerName: "NAME",
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


  const deleteUrl = `https://dummyapi.io/docs/post/${userID.current}`;

 
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
    <div style={{  height: "50vh", width: "20vw", marginLeft: '1rem', background: '#FFFFFF', boxShadow: '0px 0px 7px 3px rgba(40, 40, 40, 0.03)',    borderRadius: '4px', height: '25rem' }} >
      <div style={{paddingTop: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>
          <img src={props.values.picture} alt='' style={{height: '6rem', width: "5rem", borderRadius: '6px'}} />
        </div>
        <div>
        <label style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}> FULL NAME </label>
        <div style={{alignSelf: 'stretch', fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}>
          {" "}
          {props.values.title}{props.values.firstName} {props.values.lastName}{" "}
        </div>
        

        <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}> PHONE NUMBER </label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}} > {props.values.phone} </div>
        </div>
        </div>
       <hr style={{paddingLeft: '2rem', paddingRight: '2rem', width: '10rem'}}/>
       <div style={{display: 'flex', justifyContent: 'space-around'}}>
         <div>
         <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}> GENDER </label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.gender} </div>
         </div>

         <div>
         <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>DATE OF BIRTH</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.dateOfBirth} </div>
         </div>
       </div>
        <hr style={{paddingLeft: '2rem', paddingRight: '2rem', width: '10rem'}}/>

        <div style={{display: 'flex', justifyContent: 'space-around'}}>
         <div>
         <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>STREET</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.street} </div>

        <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>STATE</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.state} </div>

        <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>YEAR ENROLLED</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.yearEnrolled} </div>
         </div>

         <div>
         <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>CITY</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.city} </div>

        <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>COUNTRY</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.country} </div>
         </div>
       </div>
        <hr style={{paddingLeft: '2rem', paddingRight: '2rem', width: '10rem'}}/>
        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '1.3rem'}}>
         <div>
         <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>REGISTERED</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.registerDate} </div>

        <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>POSTS</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.posts} </div>

         </div>

         <div>
         <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>LAST UPDATED</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.updatedDate} </div>

        <label  style={{fontWeight: 600, fontSize: '6.92903px', color: '#afc2d4'}}>COMMENTS</label>
        <div style={{fontWeight: 400,
fontSize: '9.70064px', color: '#051A2E'}}> {props.values.comments} </div>
         </div>
       </div>
        

        <button style={{backgroundColor: 'red', color: 'white', borderRadius: '4px', border: 'none', width: '15rem', height: '2.4rem', marginLeft: '2rem'}} onClick= {deleteButton}>Delete</button>
      </div>
    </div>
  );
};

export { UserData };

const RecentUser = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10%" }}>
      <UserTable />
     
    </div>
  );
};

export default RecentUser;