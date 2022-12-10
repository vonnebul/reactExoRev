import PageEnfant from "./PageEnfant";

function PageParent() {
  const liste =[
    {nom: "Laury", prenom: "nathan"},
    {nom: "Sahebektiari", prenom: "behnam"}
  ]
  return (
    <div>
      <PageEnfant infos={liste}/>
    </div>
  );
}

export default PageParent;
