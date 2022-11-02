const Counter = ({ add, minus }) => {

    const handleClick = (func) => {
        func()
    }

    return (
        <div>
            <button onClick={() => { handleClick(add) }}>+</button>

            <button onClick={() => { handleClick(minus) }}>-</button>

        </div>
    )
}

export default Counter