
function AffichageBoucle() {
    const tableau =["bananes", "pommes", "oranges", "poires"]
  return (
    <div>
        {tableau.map(fruit =>(
            <p>{fruit}</p>
        ))}
    </div>
  );
}

export default AffichageBoucle;
