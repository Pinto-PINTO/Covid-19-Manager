import React, { useState, useEffect } from "react";
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
import firebase from "../../Firebase";




const ProductTable = () => {


    // ---------- Configurations START ----------

    // Update
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

    const [open, setOpen] = React.useState(false)

    // ---------- Configurations END ----------

    return (

        // api = https://hospital-inventory-managment-default-rtdb.firebaseio.com/ProductInfo.json
        // https://firebase.google.com/docs/reference/rest/database#section-get
        // https://docs.thunkable.com/realtime-db
        // https://www.youtube.com/watch?v=hzLDsxPGctY



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
                            <Table.HeaderCell> Actions </Table.HeaderCell>
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

                                    {/* ---------- Modal Update Form START ---------- */}

                                    <Modal
                                        onClose={() => setOpen(false)}
                                        onOpen={() => setOpen(true)}
                                        open={open}
                                        trigger={
                                            <Button color="blue" onClick={() => {
                                                handleUpdateClick(data);
                                            }}
                                            >
                                                <Icon name="edit"></Icon>
                                                U
                                            </Button>}
                                    >

                                        <Modal.Header>Update Product Details</Modal.Header>
                                        <Modal.Content image>
                                            <Modal.Description>

                                                {/* ---------- Update Form START --------- */}

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
                                                            setOpen(false);
                                                        }}
                                                        primary
                                                    >
                                                        {""}
                                                        <Icon name="cog"></Icon>
                                                        Update
                                                    </Button>
                                                </Form>

                                                {/* ---------- Update Form END ----------- */}



                                            </Modal.Description>
                                        </Modal.Content>
                                    </Modal>

                                    {/* ---------- Modal Update Form END ---------- */}

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


            {/* --- Product Table END---- */}

        </div>

    )
}

export default ProductTable;





