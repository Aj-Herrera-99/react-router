import React, { useContext } from "react";
import { indexApi } from "../api/api";
import PokedexContext from "../contexts/PokedexContext";

const genOption = [1, 2, 3, 4, 5, 6, 7];

function GenSelector({ genSelected }) {
    const { setPokedex } = useContext(PokedexContext);
    const handleGenChange = async (e) => {
        const filteredPokedex = await indexApi(
            import.meta.env.VITE_POKEDEX_URL,
            { params: { gen: e.target.value } }
        );
        filteredPokedex && setPokedex(filteredPokedex);
    };
    return (
        <div className="flex items-center gap-2 p-1 text-lg capitalize bg-blue-600 rounded-md ">
            <label htmlFor="gen">Choose generation:</label>
            <select
                value={genSelected}
                onChange={handleGenChange}
                className="bg-transparent rounded-md cursor-pointer outline outline-1 outline-none focus:outline-white [&>option]:text-black"
                name="gen"
                id="gen"
            >
                {genOption.map((opt) => (
                    <option key={opt} value={opt}>
                        #{opt}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default GenSelector;
