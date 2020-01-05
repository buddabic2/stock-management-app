import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

function HeaderForm() {
  return (
    <div>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Price bought</Table.HeaderCell>
          <Table.HeaderCell>Date bought</Table.HeaderCell>
          <Table.HeaderCell>Sold</Table.HeaderCell>
          <Table.HeaderCell>Price sold</Table.HeaderCell>
          <Table.HeaderCell>Date sold</Table.HeaderCell>
          <Table.HeaderCell>Bought by</Table.HeaderCell>
          <Table.HeaderCell>Shipping address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    </div>
  )
}

export default HeaderForm