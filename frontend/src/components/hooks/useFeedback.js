import React, { useState, useEffect } from 'react';
import axios from 'axios';

function useFeedback(url) {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(url);
                setFeedback(response.data); // Assuming the response contains the feedback data as an array
            } catch (error) {
                console.log(`Error in fetching feedback data: ${error.message}`);
            }
        };

        fetchData();
    }, [url]);

    return feedback;
}

export default useFeedback;