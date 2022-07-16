import React, { Component } from 'react'
import axios from 'axios'

const url = process.env.SERVER_URL;
const contacts_url = "/62d2433b4d5b061b1b51f6e8"

export default class ContactsList extends React.Component {
    state = {
        contacts: []
    }

    componentDidMount(){
        axios.get(url+contacts_url)
        .then(res => {
            const contacts = res.data;
            this.setState({ contacts });
        })
    }

    render() {
        return (
          <ul>
            { this.state.contacts.map(person => <li>{person.name}</li>)}
          </ul>
        )
      }
}
