import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
    Segment,
    Button,
    Form,
    Icon
} from "semantic-ui-react";
import firebase from "../../Firebase";
import "../../App.css";



const InsertForm = () => {



    // ---------- Configurations START ----------

    // Intilizing variables
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [productExpiration, setProductExpiration] = useState("");
    const [productQuantity, setProductQuantity] = useState("");


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


    // ---------- Configurations END ----------




    return (




        <Form className="I_in_inset_form">
            <h1 className="I_inset_form_title">Product Details Form</h1>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter Product Name"
                    focus
                    value={productName}
                    onChange={(e) => {
                        setProductName(e.target.value);
                    }}
                    type="text"
                    className="I_in_inset_form_label"
                />
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter Product Description"
                    focus
                    value={productDescription}
                    onChange={(e) => {
                        setProductDescription(e.target.value);
                    }}
                    type="text"
                    className="I_in_inset_form_label"
                />
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter Product Status"
                    focus
                    value={productStatus}
                    onChange={(e) => {
                        setProductStatus(e.target.value);
                    }}
                    type="text"
                    className="I_in_inset_form_label"
                />
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter the Expiration Date"
                    focus
                    value={productExpiration}
                    onChange={(e) => {
                        setProductExpiration(e.target.value);
                    }}
                    className="I_in_inset_form_label"
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}

                />
            </Form.Field>
            <Form.Field>
                <label className="I_in_inset_form_label"></label>
                <input
                    placeholder="Enter the Quantity"
                    focus
                    value={productQuantity}
                    onChange={(e) => {
                        setProductQuantity(e.target.value);
                    }}
                    type="number"
                    className="I_in_inset_form_label"
                />
            </Form.Field>
            <Button
                type="submit"
                onClick={() => {
                    handleAddProduct();
                }}
                className="ui button I_in_inset_form_add_btn"
            >
                {""}
                {/* <Icon name="user plus"></Icon> */}
                Add
            </Button>
        </Form>






    )
}

export default InsertForm;




