import Chocolate from './components/Chocolat';
// import Apprenant from './components/apprenant';
// import logo from './logo.svg';
import { useState } from 'react';

function App2() {  
  // const listApprenants= [
  //   {id:1, nom:"Linda", prenom:"Ekfoui"},
  //   {id:2, nom:"Bao", prenom:"Demunter"},
  //   {id:3, nom:"Jason", prenom:"Nicoletti"},
  //   {id: 4, nom:"Florian", prenom:"Danhiez"},
  //   {id: 5, nom:"Florian", prenom:"Havron"},
  //   {id: 6, nom:"Nordin", prenom:"Aziza"},
  //   {id: 7, nom:"Dominique", prenom:"De Coninck"},
  //   {id: 8, nom:"Lucas", prenom:"Vanden Bosche"},
  // ]
  const [count , setCount] = useState(0)
  const [recherche, setRecherche] = useState("")
  const [panier,setPanier] = useState ([])
  const [listChocolates, setListChocolates] = useState (
 [
    {id: 1, nom: "Lindt", type: "noir", prix:1.5},
    {id:2, nom:"Milka", type: "lait", prix: 2.3},
    {id:3, nom:"Cote d'Or", type:"praliné", prix:1.5},
    {id:4, nom:"Galer", type:"fondant", prix:3.5},
    {id:5, nom:"Nehaus", type:"cacao 90%", prix:3.1},
    {id:6, nom:"Leonidas", type:"lait noisette", prix:3.8},
  ]
)

const manger = () => {
  console.log("manger");
  const tableauChocolatMoinsUn=listChocolates.slice(1)
  setListChocolates(tableauChocolatMoinsUn)
}

const inflation=()=>{
  console.log("inflation");
  const nouveauTableau=[]
  listChocolates.forEach((chocolate)=>{
    chocolate.prix=chocolate.prix*1.1
    nouveauTableau.push(chocolate)
  })
  setListChocolates(nouveauTableau)
}

const ajouterAuPanier = (chocolate) => {
  console.log("Ajouter au panier")
  setPanier([...panier,chocolate])

}
  return (
<ul>
  <p>Compte= {count}</p>
  <button onClick={() => setCount(count +1)}>+1</button>
  <input type="text" placeholder='chercher un chocolat'
  value={recherche}
  disabled={panier.length>0}
  onChange={(event) => setRecherche(event.target.value)}
  />
  <h1>recherche: {recherche}</h1>

  <h1>Mon panier</h1>
  <ul>
    {
      panier.map((chocolate) => {
        return <li>{chocolate.nom}</li>
      })
    }
  </ul>
  <hr></hr>
  {
    listChocolates.map(item =>
      item.nom.toLowerCase().startsWith(recherche.toLowerCase()) &&
      <li>
        <Chocolate 
        addPanier={() => ajouterAuPanier(item)}
        name={item.nom} 
        type={item.type} 
        price={item.prix}/>
      </li>)

  }
  <button onClick={()=> manger ()}>manger</button>
  <button onClick={()=> inflation ()}>inflation</button>
</ul>

  )
}

export default App2;
