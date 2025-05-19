import { client } from "../AiClient";
import { Schema } from "../../amplify/data/resource";
import { FormEvent, useState } from "react";

type Recipe = Schema['generateRecipe']['type']

function GenerateSimple(){

    const [description, setDescription] = useState("");
    const [generatedRecipe, setGeneratedRecipe] = useState<Recipe>()

    const handleClick = async (e: FormEvent) => {
        e.preventDefault()
        const result = await client.generations.generateRecipe({
            description: description
        })
        console.log(result)
        if (result.data) {
            setGeneratedRecipe(result.data)
        }
    };

    function renderRecipe() {
        if (generatedRecipe) {
            const ingredientsList = []
            if (generatedRecipe.ingredients) {
                for (const ingredient of generatedRecipe.ingredients) {
                    ingredientsList.push(<li key={ingredient}>{ingredient}</li>)
                }
            }
            return <div>
                <h2>{generatedRecipe.name}</h2>
                {ingredientsList}
                <h3>{generatedRecipe.instructions}</h3>
            </div>
        }
    }

    return <main>
        <form onSubmit={(e) => handleClick(e)}>
            <label> Recipe:</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="submit" value='Generate recipe' />
        </form>
        <br />
        {renderRecipe()}
    </main>
}

export default GenerateSimple