import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios'
import uuid from 'react-uuid'

function TableForm (props) {
  const [deleteId, setDeleteId] = useState()
  const data = props.data


  const handleDelete = async (event) => {
    await axios.delete(('dolls/' + event.target.value))
  }

  const listDolls = data.map(doll => 
    <Table.Row key={uuid()}>
      <Table.Cell>{doll._id}</Table.Cell>
      <Table.Cell>{doll.name}</Table.Cell>
      <Table.Cell>{doll.priceBought}</Table.Cell>
      <Table.Cell>{doll.dateBought}</Table.Cell>
      <Table.Cell>{doll.sold ? <p>YES</p> : <p>NO</p>}</Table.Cell>
      <Table.Cell>{doll.priceSold}</Table.Cell>
      <Table.Cell>{doll.dateSold}</Table.Cell>
      <Table.Cell>{doll.boughtBy}</Table.Cell>
      <Table.Cell>{doll.shippingAddress}</Table.Cell>
      <Table.Cell> <button value={doll._id} onClick={handleDelete}>DELETE</button> </Table.Cell>
    </Table.Row>
  )

  return(
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price bought</Table.HeaderCell>
            <Table.HeaderCell>Date bought</Table.HeaderCell>
            <Table.HeaderCell>Sold</Table.HeaderCell>
            <Table.HeaderCell>Price sold</Table.HeaderCell>
            <Table.HeaderCell>Date sold</Table.HeaderCell>
            <Table.HeaderCell>Bought by</Table.HeaderCell>
            <Table.HeaderCell>Shipping address</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {listDolls}
        </Table.Body>
      </Table>
    </div>
  )
}

export default TableForm