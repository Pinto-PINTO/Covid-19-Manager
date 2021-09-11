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




const Data_T = () => {


    // ---------- Configurations START ----------


    const [productData, setProductData] = useState([]);
    const [pcount, setPcount] = useState("");
    const [totalQty, setTotalQty] = useState("");
    const [tot, setTot] = useState("");


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
        },

            // Total Product Count
            firestore.once("value", (snapshot) => {
                setPcount(snapshot.numChildren());
                // alert('Count: ' + snapshot.numChildren());
            }),

        
        

        
        
        );

        // const query = firebase.database().ref("/ProductInfo").orderByKey();
        // query.once("value")
        //     .then(function (snapshot) {
        //         snapshot.forEach(function (childSnapshot) {
        //             // key will be "ada" the first time and "alan" the second time
        //             var key = childSnapshot.key;
        //             // childData will be the actual contents of the child
        //             var childData = childSnapshot.val();
        //         });
        //     });
}, []);



// ---------- Configurations END ----------




return (

    // api = https://hospital-inventory-managment-default-rtdb.firebaseio.com/ProductInfo.json
    // https://firebase.google.com/docs/reference/rest/database#section-get
    // https://docs.thunkable.com/realtime-db
    // https://www.youtube.com/watch?v=hzLDsxPGctY

    <div>

        {/* --- Product Table START---- */}

        <Segment padded="very">

            <p>{pcount}</p>
            {/* <p>{totalQty}</p> */}
           

            {productData.map((data, index) => {
                
                return(
                    <div>
                        {/* setTotalQty({data.Product_Qty}) */}
                        <p>{data.Product_Qty}</p>
                        {/* {setTot = tot + totalQty}
                        <p>{tot}</p> */}
                    </div>
                    
                )
                
            })}



            {/* <p>{totalQty}</p> */}
            {/* Creating table with content from db */}

            {productData.map((data, index) => {
                return (
                    <Table.Body>
                        <Table.Cell>{data.Product_Name}</Table.Cell>
                        <Table.Cell>{data.Product_Desc}</Table.Cell>
                        <Table.Cell>{data.Product_Status}</Table.Cell>
                        <Table.Cell>{data.Product_Expire}</Table.Cell>
                        <Table.Cell>{data.Product_Qty}</Table.Cell>

                    </Table.Body>

                );
            })}

            {/* ----- Table END ----- */}
        </Segment>



        {/* --- Product Table END---- */}

    </div>



)
}

export default Data_T;





