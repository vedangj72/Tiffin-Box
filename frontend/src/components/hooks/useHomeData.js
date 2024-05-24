import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function useHomeData(url) {
    // State variables
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Get user phone number from Redux state
    const userPhone = useSelector(state => state.user.user.phone);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(url);
                const foundUser = response.data.find(user => String(user.phone) === String(userPhone));

                if (foundUser) {
                    setUserData(foundUser);
                } else {
                    setError(true);
                }
            } catch (error) {
                console.error(`Error in fetching user data: ${error.message}`);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userPhone, url]); // Dependencies: userPhone and URL

    // Return state and data
    return { userData, loading, error };
}

export default useHomeData;