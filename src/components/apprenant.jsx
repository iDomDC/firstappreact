function Apprenant (props) {
    // const etablissement="IFAPME";
    
    return (
        <div>
            <p>
                {props.nom} {props.prenom}
                <input type="checkbox" />
            </p>
        </div>
    )
}

export default Apprenant;