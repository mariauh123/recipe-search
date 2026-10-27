import RecipeCard from "./RecipeCard";
import './RecipeGrid.css'

export default function RecipeGrid({recipes}){
    return (<div className='recipe-grid'>
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe.id}>
                    <RecipeCard recipe={recipe} />
                </li>
            ))}
        </ul>
    </div>)
    
}