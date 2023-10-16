const MainLoader = ({isLoading, children}) => {

    if(isLoading){
        return(
            <div />
        )
    }
    return(
        <>
            {children}
        </>
    )

}

export default MainLoader