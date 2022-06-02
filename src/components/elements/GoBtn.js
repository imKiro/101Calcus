function GoBtn({className = '', message = ''}){

    return(
        <button className={className}>
            {message}
        </button>
    )
}

export default GoBtn;