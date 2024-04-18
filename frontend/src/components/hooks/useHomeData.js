import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function useHomeData(url) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(false);
    const userPhone = useSelector(state => state.user.user.phone);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(url);
                const user = response.data.find(user => String(user.phone) === String(userPhone));
                if (user) {

                    setUserData({
                        name: user.name,
                        age: user.age,
                        college: user.college,
                        address: user.address,
                        datestart: user.datestart,
                        dateend: user.dateend,
                        payed: user.payed,
                        sub: user.sub

                    });
                } else {
                    console.log("No user found");
                    seterror(true);
                    setUserData(null);
                }
            } catch (error) {
                console.log(`Error in fetching user data: ${error.message}`);
                seterror(true);
                setUserData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userPhone, url]);

    return { userData, loading, error };
}

export default useHomeData;