import { ItemsContext } from "./ItemsContext";
import React, { useState } from "react";
import axios from "axios";

const ItemsContextProvider = (props) => {

    // const [items, setItems] = React.useState(
    //     JSON.parse(localStorage.getItem('items')) || []
    // );

    const [items, setItems] = React.useState();

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'api/messages',
            );
            setItems(result.data);
        };
        fetchData();
    }, []);


    const handleChange = (id, property, newValue) => {
        // min max validation on input will not defend from typing.
        // create usable
        // further validation is required:
        if (property === 'quantity' && newValue > 99) {
            newValue = 99;
        } else if (property === 'quantity' && newValue < 1) {
            newValue = 1;
        }

        let newItems = [...items].map(item => {
            if (item.id === id) {
                item[property] = newValue
            }
            return item
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    const handleNewItem = (newItem) => {


        sendMessage(newItem);

    }

    const sendMessage = (newItem) => {
        axios.post(`api/message`, { newItem })
            .then(res => {
                let newItems = [...items];
                newItems.unshift(res.data);
                setItems(newItems);
            })


    }

    const download = () => {
        axios(`api/pdf`, { items }, {
            method: 'GET',
            responseType: 'arraybuffer' //Force to receive data in a Blob Format
        })
            .then(response => {
                // ugly hack because dompdf would not download from server. no time for this now.
                const a = document.createElement("a");
                const file = new Blob(
                    [response.data],
                    { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                a.href = fileURL;
                a.download = 'logs.pdf';
                document.body.appendChild(a);
                a.target = "_blank";
                a.click();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleDelete = (id) => {
        let newItems = [...items].filter(item => {
            return item.id !== id;
        })
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    return (
        <ItemsContext.Provider value={{ items, setItems, handleChange, handleNewItem, handleDelete, download }}>
            {props.children}
        </ItemsContext.Provider >
    );
};

export default ItemsContextProvider;