const Spinner = ({ defaultSize = "40px", color = "white", border = "2px" }) => {
    return (
        <>
            <div className="spinner"></div>
            <style jsx={true}>{`
                .spinner {
                    border: ${border} solid rgba(0, 0, 0, 0.1);
                    width: ${defaultSize};
                    height: ${defaultSize};
                    border-radius: 50%;
                    border-left-color: ${color};
                    animation: spin 1s ease infinite;
                }
                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    );
};

export default Spinner;
