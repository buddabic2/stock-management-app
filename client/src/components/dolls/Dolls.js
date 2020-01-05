import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TableForm from '../table/TableForm'
import $ from 'jquery'

function Dolls() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("dolls")
  const [name, setName] = useState()
  const [priceBought, setPriceBought] = useState()
  const [dateBought, setDateBought] = useState()
  const [sold, setSold] = useState()
  const [priceSold, setPriceSold] = useState()
  const [dateSold, setDateSold] = useState()
  const [boughtBy, setBoughtBy] = useState()
  const [shippingAddress, setShippingAddress] = useState()
  const [postData, setPostData] = useState({
    name: "",
    priceBought: null,
    dateBought: "",
    sold: null,
    dateSold: "",
    boughtBy: "",
    shippingAddress: ""
  })
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(search)
      setData(result.data)
      console.log(result.data)
    } 
    fetchData()
  }, [search])

  const handleClick = (event) => {
    setSearch(event.target.value)
  }

  const addToData = async () => {
    await axios.post('/dolls', postData)
  }

  const handleName = (event) => {
    setName(event.target.value)
    console.log(event.target.value)
  }

  const handlePriceBought = (event) => {
    setPriceBought(event.target.value)
    console.log(event.target.value)
  }

  const handleDateBought = (event) => {
    setDateBought(event.target.value)
    console.log(event.target.value)
  }

  const handleSold = (event) => {
    setSold(event.target.value)
    console.log(event.target.value)
  }

  const handlePriceSold = (event) => {
    setPriceSold(event.target.value)
    console.log(event.target.value)
  }

  const handleDateSold = (event) => {
    setDateSold(event.target.value)
    console.log(event.target.value)
  }

  const handleBoughtBy = (event) => {
    setBoughtBy(event.target.value)
    console.log(event.target.value)
  }

  const handleShippingAddress = (event) => {
    setShippingAddress(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPostData({
      name: name,
      priceBought: priceBought,
      dateBought: dateBought,
      sold: true,
      dateSold: dateSold,
      boughtBy: boughtBy,
      shippingAddress: shippingAddress
    })
  }

  console.log(postData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: <input name="name" type="text" onChange={handleName} /></label>
        <label>Price bought: <input name="priceBought" type="number" onChange={handlePriceBought} /></label>
        <label>Date bought: <input name="dateBought" type="text" onChange={handleDateBought} /></label>
        <label>Sold: <input name="dateBought" type="text" onChange={handleSold} /></label>
        <label>Price sold: <input name="priceSold" type="number" onChange={handlePriceSold} /></label>
        <label>Date sold: <input name="dateSold" type="text" onChange={handleDateSold} /></label>
        <label>Bought by: <input name="boughtBy" type="text" onChange={handleBoughtBy} /></label>
        <label>Shipping address: <input name="shippingAddress" type="text" onChange={handleShippingAddress} /></label>
        <input type="submit" value="Submit"/>
      </form>
      <button onClick={addToData}>LALA</button>
      <button value="dolls" onClick={handleClick}>All dolls</button>
      <button value="dolls/sold" onClick={handleClick}>Sold dolls</button>
      <button value="dolls/notsold" onClick={handleClick}>Available dolls</button>
      <button onClick={addToData}>SEND</button>
      <TableForm data={data}/>
    </div>
  )
}

export default Dolls