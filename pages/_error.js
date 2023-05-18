import { PageError } from "component/Page_Error";

const Error = (props) => {
    return <PageError {...props} />
}
Error.getInitialProps = ({res, err})=>{
    const statusCode = res? res.statusCode : err? err.statusCode : 500;
    const typePage = "otros"
    return { typePage, statusCode }
}

export default Error