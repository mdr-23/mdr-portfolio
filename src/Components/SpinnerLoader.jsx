import Spinner from 'react-bootstrap/Spinner';

const SpinnerLoader = ({loading, children}) => {

    if(loading){
        return(
            <Spinner
            className="spinner"
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
        )
    }else{
        return(
            <>
                {children}
            </>
        )
    }

}

export default SpinnerLoader