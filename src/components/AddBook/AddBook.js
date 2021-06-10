import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const history = useHistory();

    const onSubmit = data => {
        const bookData = {
            name: data.name,
            author : data.author,
            price: data.price,
            img: imageURL
        }
        console.log(bookData);

        fetch("https://fast-coast-93402.herokuapp.com/addBook", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => res.json())
            .then (data => {
                alert('Your Book Successfully Added')
                history.replace('/')
            })

    }
    const handleImageUpload = book => {
        console.log(book.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '5465f12879a78df623195d57f5da8e85');
        imageData.append('image', book.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="App">
            <h3>Add your Favorite Book here</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='name' defaultValue="Book Name" {...register("name")} />
                <br></br>
                <input author='text' defaultValue="Author" {...register("author")} />
                <br></br>
                <input price='number' type='number' defaultValue="Price" {...register("price")} />
                <br></br>
                <input img="imageURL" type="file" onChange={handleImageUpload} />
                <br></br>
                {errors.exampleRequired && <span>This field is required</span>}
                <input onBlur={handleSubmit} className='btn-primary' type="submit" />
            </form>
        </div>
    );
};

export default AddBook;