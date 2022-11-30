function Chocolate (props) {
    return (
        <div>
                {props.name} {props.type} {props.price}
                <button onClick={  props.addPanier}>Ajouter au panier</button>
        </div>
    )
}

export default Chocolate