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
      key: 'email',
      title: 'User Email',
      dataIndex: 'email',
    },
  ];

export function TableList() {    
    const [dataSource, setDataSource] = useState([
        {key:1, userId:1, name:'Jhon', email: 'hola@gmail.com'},
        {key:2, userId:2, name:'a', email: 'f@gmail.com'},
        {key:3, userId:3, name:'s', email: 'r@gmail.com'},
        {key:4, userId:4, name:'d', email: 'y@gmail.com'}
    ]);

  return (
    <Table columns={columns} dataSource={dataSource}/>
  )
}

