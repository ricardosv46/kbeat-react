import { useState } from "react";

const useClose = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    const handleClose = () => {
        setIsOpen(false);
    };
    return {
        handleClose,
        isOpen
    };
};

export { useClose };
