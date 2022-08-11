import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import{ExclamationCircleOutlined} from '@ant-design/icons'
import { Button,Modal,Space, Table, Tag } from 'antd';
import Form from "./form"
import confirm from 'antd/lib/modal/confirm';

const data = [
  {
    id: '1',
    Name: 'John Brown',
    State: 32,
    Country: 'India',
    isActive: "Active",
  },
  {
    id: '2',
    Name: 'Jim Green',
    State: 42,
    Country: 'India',
    isActive:"inActive",
  },
  {
    id: '3',
    Name: 'Joe Black',
    State: 32,
    Country: 'India',
    isActive: "Active",
  },
  {
    id: '4',
    Name: 'Joelack',
    State: 32,
    Country: 'India',
    isActive: "Active",
  },
  {
    id: '5',
    Name: 'ketrader Black',
    State: 32,
    Country: 'India',
    isActive: "Active",
  },
  {
    id: '6',
    Name: 'Black',
    State: 32,
    Country: 'India',
    isActive: "Active",
  },
  {
    id: '7',
    Name: 'read Black',
    State: 32,
    Country: 'India',
    isActive: "Active",
  }
];

const App = () =>{
  const columns = [
    {
      title:"Sr",
      render:(_,record)=>(
        <Space size="middle">
        <a href ="/">{record.id}</a>
      </Space>
      )
    },
    {
      title: 'Action',
      key: 'id',
      render: (record) => (
        <Space size="middle">
          <a href="/"><Tag color={"blue"}>
          Edit({record.id})
          </Tag></a>
          <button  onClick={onfirms}>
          Delete</button>
        </Space>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      render: (text) => <a href="/">{text}</a>,
    },
    {
      title: 'State',
      dataIndex: 'State',
      key: 'State',
    },
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'country',
    },
    {
      title: 'Active',
      key: 'isActive',
      dataIndex: 'isActive',
      render:()=> (
        <><Tag color={"green"}>
              Active
            </Tag>
        </>
      )
    },
  ];
  const [isVisible,setisVisible]=useState(false);
  const CityFormModel=(e)=>{
    e.preventDefault();
    setisVisible(true)
    console.log("click")
  }
  const onCancel=(e)=>{
    setisVisible(false)
  }
  const onfirms =({record})=>{
    console.log(record)
    Modal.confirm({
      title:"Do you Want to delete these items?",
      icon: <ExclamationCircleOutlined />,
      content:`${record}`,
  
      onOk(data) {
        console.log(data);
      },
  
      onCancel() {
        console.log('Cancel');
      }
    })
  }

return(<>
<Button onClick={CityFormModel}>Add City</Button>
<Modal okText={"Submit"} visible={isVisible} onCancel={onCancel}>
    <Form  title= {onCancel}></Form>
  </Modal>
<Table columns={columns} onRow={(record,index)=>{
}}
pagination={{
  defaultPageSize:2,
}} dataSource={data} /></>) 
;
}
//style={{opacity:"0"}} to hide the table

export default App;
