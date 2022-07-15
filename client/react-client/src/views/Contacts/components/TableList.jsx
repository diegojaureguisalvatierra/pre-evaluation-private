import React from 'react'
import { Space, Table, Tag } from 'antd'
import { useState } from 'react';
  
  const columns = [
    {
      key: 'userId',
      title: 'User Id',
      dataIndex: 'userId',
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 'userEmail',
      title: 'User Email',
      dataIndex: 'userEmail',
    },
  ];

export function TableList() {    
    const [dataSource, setDataSource] = useState([
        {userId:1, name:'Jhon', userEmail: 'hola@gmail.com'},
        {userId:2, name:'a', userEmail: 'f@gmail.com'},
        {userId:3, name:'s', userEmail: 'r@gmail.com'},
        {userId:4, name:'d', userEmail: 'y@gmail.com'}
    ]);

  return (
    <Table columns={columns} dataSource={dataSource}/>
  )
}

