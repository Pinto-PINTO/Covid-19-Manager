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



const UpdateForm = () => {


    // ---------- Configurations START ----------

    
    // Update Variables
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


    // Updating user information once the button is clicked in update form
    const handleUpdateProduct = () => {
        const firestore = firebase.database().ref("/ProductInfo").child(productId); // for a particular productId
        firestore.update({

            Product_Name: setuProductName,
            Product_Desc: setuProductDescription,
            Product_Status: setuProductStatus,
            Product_Expire: setuProductExpiration,
            Product_Qty: setuProductQuantity            
        });

        // After inserting form fields to be empty
        setuProductName("");
        setuProductDescription("");
        setuProductStatus("");
        setuProductExpiration("");
        setuProductQuantity("");

    };


    // ---------- Configurations END ----------



    return (

        <div>

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

        </div>

    )
}

export default UpdateForm;




