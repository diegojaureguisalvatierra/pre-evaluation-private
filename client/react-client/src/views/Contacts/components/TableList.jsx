import React from 'react'
import { Space, Table, Tag } from 'antd'
import { useState } from 'react';

interface DataType {
    userId: string;
    name: string;
    userEmail: number;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

export function TableList() {    
    const [dataSource, setDataSource] = useState([
        {id:1, name:'Jhon', userEmail: 'hola@gmail.com'},
        {id:2, name:'a', userEmail: 'f@gmail.com'},
        {id:3, name:'s', userEmail: 'r@gmail.com'},
        {id:4, name:'d', userEmail: 'y@gmail.com'}
    ]);

  return (
    <Table columns={columns} dataSource={data}/>
  )
}

