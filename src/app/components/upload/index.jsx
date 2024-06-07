import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import { FaArrowUpFromBracket } from "react-icons/fa6";
import style from './style.module.css'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';

export const UploadComponent = () => {
    const [files, setFiles] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [error, setError] = useState();
    const inputRef=useRef();

    function handleMultipleChange(event) {
        setFiles([...event.target.files]);
    }

    function handleMultipleSubmit(event) {
        inputRef.current.click()
        event.preventDefault();
        const url = 'http://localhost:3000/uploadFiles';
        // const formData = new FormData();

        // files.forEach((file, index) => {
        //     formData.append(`file${index}`, file);
        //     document.append(formData)
        // });
        

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
            // onUploadProgress: function (progressEvent) {
            //     const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //     setUploadProgress(percentCompleted);
            // }
        };
        // axios.post(url, formData, config).then((response) => {
        //     console.log(response.data);
        //   });

        // axios.post(url, formData, config)
        //   .then((response) => {
        //     console.log(response.data);
        //   })
        // .catch((error) => {
        //     console.error("Error uploading file: ", error);
        //     setError(error);
        //   });
    }


return (
    <form action="" onSubmit={handleMultipleSubmit} className={style.container}>

        <input type="file" accept=".pdf" id="contained-button-file" className={style.input} onChange={handleMultipleChange} ref={inputRef}/>
        <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" type='submit' className={style.para}>
                <FaArrowUpFromBracket /> Upload Document
            </Button>
            {/* {uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />} */}
        </label>
    </form>
);
        }