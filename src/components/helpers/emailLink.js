import { Link } from "react-router-dom";

export const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            className=" text-blue-600 font-semibold underline"
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};