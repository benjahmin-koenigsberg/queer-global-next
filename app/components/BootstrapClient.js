"use client"
import { useEffect } from 'react';

function BootstrapClient() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            require('bootstrap/dist/js/bootstrap.bundle.min');
        }    } , []);
    return (
        <></>
    )
}

export default BootstrapClient;
