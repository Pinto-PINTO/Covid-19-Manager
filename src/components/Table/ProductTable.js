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
    Menu,
} from "semantic-ui-react";
import { TablePagination, TableRow, TableCell } from '@material-ui/core';
import firebase from "../../Firebase";
import '../../App.css'




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

    const [open, setOpen] = React.useState(false)  // Opening and closing model update form

    // Table Pagination
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(6);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 6));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, productData.length - page * rowsPerPage);


    // ---------- Configurations END ----------


    return (

        <div>

            {/* --- Product Table START---- */}

            <Segment>

                {/* Creating table with content from db */}
                <Table celled fixed singleLine className="I_product_table">
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
                    {productData
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((data, index) => {
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
                                                    {/* <Icon name="edit"></Icon> */}
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
                                                                type="text"
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
                                                                type="text"
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
                                                                type="text"
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
                                                                type="date"
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
                                                                type="number"
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
                                            {/* <Icon name="delete"></Icon> */}
                                            D
                                        </Button>
                                    </Table.Cell>
                                </Table.Body>
                            );
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </Table>
                <TablePagination
                    component="div"
                    count={productData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                {/* ----- Table END ----- */}
            </Segment>


            {/* --- Product Table END---- */}

        </div>

    )
}

export default ProductTable;




