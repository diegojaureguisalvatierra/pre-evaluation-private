import React from 'react'
import { Table } from 'antd'
  
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
    sorter: (a, b) => a.name.toLowerCase() < b.name.toLowerCase()
  },
  {
    key: 'email',
    title: 'User Email',
    dataIndex: 'email',
  },
];

export function TableList({dataContacts}) {    
  dataContacts.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  });

  return (
    <Table columns={columns} dataSource={dataContacts}/>
  )
}

