
const Error = (props) => {
    return <div>error</div>
}
Error.getInitialProps = ({res, err})=>{
    const statusCode = res? res.statusCode : err? err.statusCode : 500;
    const typePage = "otros"
    return { typePage, statusCode }
}

export default Error