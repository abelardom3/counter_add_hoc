const BackButton = ({ reset }) => {

    const handleClick = () => {
        reset()
    }

    return (
        <button onClick={handleClick}>Go back</button>
    )
}

export default BackButton