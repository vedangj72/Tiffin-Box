import { useEffect, useState } from 'react'
import axios from 'axios';

function useMenu() {
    const [menu, setMenu] = useState([]);
    useEffect((() => {
        const fetchData = async() => {
            try {
                const response = await axios.get('http://localhost:7000/home/menu');
                if (response.status === 201 || response.status === 200) {
                    setMenu(response.data);
                } else {
                    console.error('Error fetching menu:', response.statusText);
                }


            } catch (error) {
                console.log(`Error in featching the data(menu) ${error}`)
            }
        }
        fetchData();
    }), [])

    return (menu)
}

export default useMenu