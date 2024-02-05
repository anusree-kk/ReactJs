import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthAndNavigation = (redirectPath: string) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate(redirectPath);
        }
    }, [navigate, redirectPath]);

    const handleLogout = () => {
        console.log('Logout successfully');
        localStorage.removeItem('token');
        navigate(redirectPath);
    };

    return { handleLogout };
}

export default useAuthAndNavigation;
