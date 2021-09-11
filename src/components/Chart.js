import React, { PureComponent, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Grid,
  Modal,
  Image,
  Segment,
  Button,
  Form,
  Header,
  Table,
  Icon,
} from "semantic-ui-react";
import firebase from "../Firebase";


const data = [
  {
    name: 'Syringe',
    July: 4000,
    August: 2400,
    amt: 2400,
  },
  {
    name: 'Sanitizer',
    July: 3000,
    August: 1398,
    amt: 2210,
  },
  {
    name: 'N95 Masks',
    July: 2000,
    August: 9800,
    amt: 2290,
  },
  {
    name: 'FPP2 Mask',
    July: 2780,
    August: 3908,
    amt: 2000,
  },
  {
    name: 'Blood Kit',
    July: 1890,
    August: 4800,
    amt: 2181,
  },
  {
    name: 'Crestor',
    July: 2390,
    August: 3800,
    amt: 2500,
  },
  {
    name: 'Nexium',
    July: 3490,
    August: 4300,
    amt: 2100,
  },
];

export default function Chart() {

  const [productData, setProductData] = useState([]);
  const [pcount, setPcount] = useState("");

  // Creating DB in firebase 
  useEffect(() => {
    const firestore = firebase.database().ref("/ProductInfo");
    firestore.on("value", (response) => {
      const data = response.val();
      let productInfo = [];
      for (let id in data) {
        productInfo.push({
          id: id,
          Product_Name: data[id].Product_Name,
          Product_Desc: data[id].Product_Desc,
          Product_Status: data[id].Product_Status,
          Product_Expire: data[id].Product_Expire,
          Product_Qty: data[id].Product_Qty
        });
      }
      setProductData(productInfo);
    });
  }, []);

  return (
    <ResponsiveContainer width="40%" aspect={3}>

      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="August" stroke="#8884d8" />
        <Line type="monotone" dataKey="July" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
