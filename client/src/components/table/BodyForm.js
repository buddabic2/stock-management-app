import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


function BodyForm(props) {
  const data = props.data

  return (
    <div>
      <Table.Row>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>{data.priceBought}</Table.Cell>
        <Table.Cell>{data.dateBought}</Table.Cell>
        <Table.Cell>{data.sold}</Table.Cell>
        <Table.Cell>{data.priceSold}</Table.Cell>
        <Table.Cell>{data.dateSold}</Table.Cell>
        <Table.Cell>{data.boughtBy}</Table.Cell>
        <Table.Cell>{data.shippingAddress}</Table.Cell>
      </Table.Row>
    </div>
  )
}

export default BodyForm