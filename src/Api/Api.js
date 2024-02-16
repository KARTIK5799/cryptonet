import { useEffect, useState } from 'react';

const useFetchUser = () => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
            const data = await response.json();
            setUser(data.results[0]);
        } catch (error) {
            console.log("Something is wrong with Your Network or Api");
        }
    };

    useEffect(() => {
       fetchUser();
    }, []);

    return user;
}

export default useFetchUser;
