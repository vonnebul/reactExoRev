
function Condition() {
    const monBooleen = false
  return (
    <div>
        {monBooleen ? 
        <p>la valeur de cette variable est 'true'</p>
         : <p>Votre Nom, votre prénom</p> 
        }
    </div>
  );
}

export default Condition;