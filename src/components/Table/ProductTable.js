import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Container,
    Grid,
    Segment,
    Button,
    Form,
    Header,
    Table,
    Icon,
} from "semantic-ui-react";
import firebase from "../../Firebase";

// import '../App.css'



const ProductTable = () => {


    // ---------- Configurations START ----------

    // Intilizing variables
    const [uProductName, setuProductName] = useState("");
    const [uProductDescription, setuProductDescription] = useState("");
    const [uProductStatus, setuProductStatus] = useState("");
    const [uProductExpiration, setuProductExpiration] = useState("");
    const [uProductQuantity, setuProductQuantity] = useState("");

    const [productId, setProductId] = useState(""); // used when updating or deleting

    // Storing product info
    const [productData, setProductData] = useState([]);


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


    // Locate and display data from db into update form
    const handleUpdateClick = (data) => {
        setuProductName(data.Product_Name);
        setuProductDescription(data.Product_Desc);
        setuProductStatus(data.Product_Status);
        setuProductExpiration(data.Product_Expire);
        setuProductQuantity(data.Product_Qty);
        setProductId(data.id);
    };


    // Delete User
    const handleDeleteClick = (id) => {
        const firestore = firebase.database().ref("/ProductInfo").child(id);
        firestore.remove();
    };


    // ---------- Configurations END ----------



    return (

        <div>

            {/* --- Product Table START---- */}

            <Segment padded="very">

                {/* Creating table with content from db */}
                <Table celled fixed singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> Product Name </Table.HeaderCell>
                            <Table.HeaderCell> Description </Table.HeaderCell>
                            <Table.HeaderCell> Status </Table.HeaderCell>
                            <Table.HeaderCell> Expiration Date </Table.HeaderCell>
                            <Table.HeaderCell> Quantity </Table.HeaderCell>

                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {productData.map((data, index) => {
                        return (
                            <Table.Body>
                                <Table.Cell>{data.Product_Name}</Table.Cell>
                                <Table.Cell>{data.Product_Desc}</Table.Cell>
                                <Table.Cell>{data.Product_Status}</Table.Cell>
                                <Table.Cell>{data.Product_Expire}</Table.Cell>
                                <Table.Cell>{data.Product_Qty}</Table.Cell>
                                <Table.Cell>
                                    <Button
                                        color="blue"
                                        onClick={() => {
                                            handleUpdateClick(data);
                                        }}
                                    >
                                        <Icon name="edit"></Icon>
                                        
                                    </Button>
                                    <Button
                                        color="red"
                                        onClick={() => {
                                            handleDeleteClick(data.id);
                                        }}
                                    >
                                        <Icon name="delete"></Icon>
                                        
                                    </Button>
                                </Table.Cell>
                            </Table.Body>
                        );
                    })}
                </Table>
                {/* ----- Table END ----- */}
            </Segment>


            {/* --- Product Table END---- */}

        </div>

    )
}

export default ProductTable;




