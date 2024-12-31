import { useState, useEffect } from "react";
import berry_1 from '../assets/berry_1.jpg'

export default function Enigmes() {

  const [indice, setIndice] = useState("");

  useEffect(() => {
    // Fonction pour vérifier l'heure et les minutes et définir l'indice
    const afficherIndice = () => {
      const maintenant = new Date();
      const heures = maintenant.getHours(); // Heures actuelles
      const minutes = maintenant.getMinutes(); // Minutes actuelles

      // Condition basée sur heures et minutes
      if ((heures === 20 && minutes >= 0) || (heures === 20 && minutes < 59)) {
        setIndice("Indice 1 : Additionne tous les chiffres de la nouvelle année...dépêche toi avEnt qu'il ne soit trop tard ;)");
      } else if ((heures === 21 && minutes >= 0) || (heures === 21 && minutes < 59)) {
        setIndice("Indice 2 : Il n’est pas mouillé mais on l’a mis dedans quand même !");
      } else if ((heures === 22 && minutes >= 0) || (heures === 22 && minutes < 59)) {
        setIndice("Indice 3 : 1234567890QWERTYUIOP…");
      } else {
        setIndice("Aucun indice pour le moment. Revenez à une autre heure !");
      }
    };

    // Appel initial et mise à jour toutes les minutes
    afficherIndice();
    const intervalId = setInterval(afficherIndice, 60000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <div id="enigmes" className="container-fluid">
        
        <div className="title">
          <h1 className="animate flipInX">NOUVEL AN 2025</h1>
        </div>

        <div className="heading">
          <h1 className='mb-5'>ONE PIECE TREASURE HUNT</h1>
        </div>

        <div className="col-xs-8 col-md-4 profile-picture">
          <img src={berry_1} className="rounded-circle" alt="berry" />
        </div>

        <div className="heading">
          <h3 className="animate flash mt-5">{indice}</h3>
        </div>

      </div>
    </>
  )
}
