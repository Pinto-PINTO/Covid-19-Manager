import React, { useState, useEffect } from "react";
// import firebase from "./Firebase";
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
// import './css/AddUserForm.css';
import "semantic-ui-css/semantic.min.css";
import firebase from "../../Firebase";
// import TopContainers from './TopContainers';

// import './Forms.css'
// import '../App.css'




const Form_Table = () => {


    // ---------- Configurations START ----------

    // Insert
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [productExpiration, setProductExpiration] = useState("");
    const [productQuantity, setProductQuantity] = useState("");

    // Update
    const [uProductName, setuProductName] = useState("");
    const [uProductDescription, setuProductDescription] = useState("");
    const [uProductStatus, setuProductStatus] = useState("");
    const [uProductExpiration, setuProductExpiration] = useState("");
    const [uProductQuantity, setuProductQuantity] = useState("");

    // Storing product info
    const [productData, setProductData] = useState([]);

    // Used when updating or deleting (Table)
    const [productId, setProductId] = useState("");

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


    // ---------- Insert Form Button Handling START ----------

    // Add Button Function
    const handleAddProduct = () => {

        // ProductInfo is the name of the db we are creating in firebase
        const firestore = firebase.database().ref("/ProductInfo");

        let data = {
            // data obj passes values from the input fields of the form to the db fields
            Product_Name: productName,
            Product_Desc: productDescription,
            Product_Status: productStatus,
            Product_Expire: productExpiration,
            Product_Qty: productQuantity
        };

        firestore.push(data); // Sending the data to firebase db

        // After inserting form fields to be empty
        setProductName("");
        setProductDescription("");
        setProductStatus("");
        setProductExpiration("");
        setProductQuantity("");
    };

    // ---------- Insert Form Button Handling END ----------


    // ---------- Update Form Button Handling START ----------

    // Updating user information once the button is clicked in update form
    const handleUpdateProduct = () => {
        const firestore = firebase.database().ref("/ProductInfo").child(productId); // for a particular productId
        firestore.update({

            Product_Name: uProductName,
            Product_Desc: uProductDescription,
            Product_Status: uProductStatus,
            Product_Expire: uProductExpiration,
            Product_Qty: uProductQuantity,
        });

        // After inserting form fields to be empty
        setuProductName("");
        setuProductDescription("");
        setuProductStatus("");
        setuProductExpiration("");
        setuProductQuantity("");

    };

    // ---------- Update Form Button Handling END ----------


    // ---------- Table Update & Delete Button Handling START ----------

    // Update Button (Table)
    // Locate and display data from db into update form
    const handleUpdateClick = (data) => {
        setuProductName(data.Product_Name);
        setuProductDescription(data.Product_Desc);
        setuProductStatus(data.Product_Status);
        setuProductExpiration(data.Product_Expire);
        setuProductQuantity(data.Product_Qty);
        setProductId(data.id);
    };

    // Delete Button (Table)
    // Delete User
    const handleDeleteClick = (id) => {
        const firestore = firebase.database().ref("/ProductInfo").child(id);
        firestore.remove();
    };

    // ---------- Table Update & Delete Button Handling END ----------


    // ---------- Configurations END ----------


    return (
        // The divider adds some padding to the top
        <div class="ui hidden divider">
            <Container className="b1">

                <Grid>
                    <Grid.Row columns="2" className="layout">
                        <Grid.Column textAlign="left" >

                            {/* --- Inserting Form START---- */}
                            <Segment padded="very">
                                <Form>
                                    <Form.Field>
                                        <label>Product Name</label>
                                        <input
                                            placeholder="Enter Product Name"
                                            focus
                                            value={productName}
                                            onChange={(e) => {
                                                setProductName(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Product Description</label>
                                        <input
                                            placeholder="Enter Description"
                                            focus
                                            value={productDescription}
                                            onChange={(e) => {
                                                setProductDescription(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Status</label>
                                        <input
                                            placeholder="Enter Status"
                                            focus
                                            value={productStatus}
                                            onChange={(e) => {
                                                setProductStatus(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Expiration Date</label>
                                        <input
                                            placeholder="Enter the Expiration Date"
                                            focus
                                            value={productExpiration}
                                            onChange={(e) => {
                                                setProductExpiration(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Quantity</label>
                                        <input
                                            placeholder="Enter the Quantity"
                                            focus
                                            value={productQuantity}
                                            onChange={(e) => {
                                                setProductQuantity(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            handleAddProduct();
                                        }}
                                        className="ui button add_btn"
                                    >
                                        {""}
                                        <Icon name="user plus"></Icon>
                                        Add
                                    </Button>
                                </Form>
                            </Segment>
                            {/* --- Inserting Form END---- */}

                        </Grid.Column>
                        <Grid.Column>

                            {/* --- Updating Form START---- */}
                            <Segment padded="very">
                                <Form>
                                    <Form.Field>
                                        <label>Product Name</label>
                                        <input
                                            placeholder="Enter Product Name"
                                            focus
                                            value={uProductName}
                                            onChange={(e) => {
                                                setuProductName(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Product Description</label>
                                        <input
                                            placeholder="Enter Description"
                                            focus
                                            value={uProductDescription}
                                            onChange={(e) => {
                                                setuProductDescription(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Status</label>
                                        <input
                                            placeholder="Enter Status"
                                            focus
                                            value={uProductStatus}
                                            onChange={(e) => {
                                                setuProductStatus(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Expiration Date</label>
                                        <input
                                            placeholder="Enter the Expiration Date"
                                            focus
                                            value={uProductExpiration}
                                            onChange={(e) => {
                                                setuProductExpiration(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Quantity</label>
                                        <input
                                            placeholder="Enter the Quantity"
                                            focus
                                            value={uProductQuantity}
                                            onChange={(e) => {
                                                setuProductQuantity(e.target.value);
                                            }}
                                        />
                                    </Form.Field>
                                    <Button
                                        type="submit"
                                        onClick={() => {
                                            handleUpdateProduct();
                                        }}
                                        primary
                                    >
                                        {""}
                                        <Icon name="cog"></Icon>
                                        Update
                                    </Button>
                                </Form>
                            </Segment>
                            {/* --- Updating Form END---- */}

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns="1">
                        <Grid.Column>

                            {/* --- Updating Form START---- */}
                            <Segment padded="very">
                                {/* Creating table with content from db */}
                                {/* ----- Table START ----- */}
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
                                                        U
                                                    </Button>
                                                    <Button
                                                        color="red"
                                                        onClick={() => {
                                                            handleDeleteClick(data.id);
                                                        }}
                                                    >
                                                        <Icon name="delete"></Icon>
                                                        D
                                                    </Button>
                                                </Table.Cell>
                                            </Table.Body>
                                        );
                                    })}
                                </Table>
                                {/* ----- Table END ----- */}
                            </Segment>
                            {/* --- Updating Form END---- */}

                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>
        </div>
    );
};

export default Form_Table;