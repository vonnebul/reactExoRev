
function PageEnfant({infos}) {
    return (
      <div>
        {infos.map(utilisateur=>(
          <p>
            <span>{utilisateur.nom} </span>
            <span>{utilisateur.prenom}</span>
          </p>
        ))}
      </div>
    );
  }
  
  export default PageEnfant;
  