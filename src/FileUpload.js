import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function FileUpload() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return alert('Please upload a file.');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('https://api.example.com/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Pass response data to the response page via state
            navigate('/response', { state: { responseData: response.data } });
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('File upload failed!');
        }
    };

    return (
        <div className="container">
            <h2>Upload a File</h2>
            <form className="file-upload" onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default FileUpload;
