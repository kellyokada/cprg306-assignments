const Item = ({name, quantity, category}) => {
    return (
        <li className="bg-emerald-500 rounded-lg p-4 w-40 mx-auto flex-col items-center" >
            <p className="font-extrabold font-sans">{name}</p>
            <p> Buy {quantity} in {category} </p>
        </li>
    )
}

export default Item;