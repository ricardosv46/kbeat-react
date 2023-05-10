const IconWebBtn = ({
    width = 13,
    height = 11,
    fill = "white",
    customClass = "",
}) => {
    return (
        <svg
            className={`${customClass}`}
            width={width}
            height={height}
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill={fill}
                d="M6.5 0C4.77595 0 3.12284 0.684821 1.90383 1.90383C0.684821 3.12284 0 4.77621 0 6.5C0 8.22379 0.684821 9.87716 1.90383 11.0962C3.12284 12.3152 4.77621 13 6.5 13C8.22379 13 9.87716 12.3152 11.0962 11.0962C12.3152 9.87716 13 8.22379 13 6.5C12.9979 4.77673 12.3123 3.12464 11.0938 1.90615C9.87536 0.687659 8.22327 0.00206349 6.5 0ZM11.4978 5.77778H9.37083C9.33369 4.45224 9.07111 3.1427 8.59445 1.90512C9.3631 2.25694 10.0317 2.79552 10.5388 3.47208C11.0459 4.14865 11.3758 4.94129 11.4978 5.77778ZM6.5 11.5556C6.11284 11.5556 5.21006 10.0389 5.07438 7.22222H7.92561C7.78994 10.0389 6.88716 11.5556 6.5 11.5556ZM5.07438 5.77778C5.21032 2.96111 6.1131 1.44444 6.5 1.44444C6.8869 1.44444 7.78994 2.96111 7.92561 5.77778H5.07413H5.07438ZM4.40556 1.90512C3.92889 3.1427 3.66631 4.45224 3.62917 5.77778H1.50222C1.62423 4.94129 1.95413 4.14865 2.46123 3.47208C2.96833 2.79552 3.6369 2.25694 4.40556 1.90512ZM1.50222 7.22222H3.62917C3.66631 8.54776 3.92889 9.8573 4.40556 11.0949C3.6369 10.7431 2.96833 10.2045 2.46123 9.52792C1.95413 8.85135 1.62423 8.05871 1.50222 7.22222ZM8.59445 11.0949C9.07111 9.8573 9.33369 8.54776 9.37083 7.22222H11.4978C11.3758 8.05871 11.0459 8.85135 10.5388 9.52792C10.0317 10.2045 9.3631 10.7431 8.59445 11.0949Z"
            />
        </svg>
    );
};

export default IconWebBtn;