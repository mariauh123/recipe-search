import './RecipeCard.css'

export default function RecipeCard({recipe}){
    return (
        <div className='recipe-card'>
            <h3 className='recipe-card__name'>{recipe.name}</h3>
            <img src={recipe.img} alt={`A picture of ${recipe.name}`}/>
            <div className='recipe-card__body'>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ') + '...'}</p>
                <p><strong>Preview:</strong> {recipe.preview}</p>
                <p><a href={recipe.recipe}>Watch Recipe!</a></p>
            </div>
        </div>
    )
}