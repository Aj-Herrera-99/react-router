import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokedexContext } from "./DefaultLayout";

const pokemonData = {
    name: "",
    type: [],
    base: {
        HP: 0,
        Attack: 0,
        Defense: 0,
        Speed: 0,
    },
};

// messi qui per semplicità, (da spostare in backend come db)
const type = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
];

const base = ["HP", "Attack", "Defense", "Speed"];

function PokemonCreate() {
    const { pokedex, setPokedex } = useContext(PokedexContext);
    const navigate = useNavigate();
    const [newPokemon, setNewPokemon] = useState(pokemonData);

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        const KEY = name;
        const VAL = value;
        switch (type) {
            case "text":
                setNewPokemon({
                    ...newPokemon,
                    [KEY]: VAL,
                });
                break;
            case "checkbox":
                const setTypes = new Set([...newPokemon.type]);
                checked ? setTypes.add(VAL) : setTypes.delete(VAL);
                setNewPokemon({ ...newPokemon, [KEY]: Array.from(setTypes) });
                break;
            case "number":
                setNewPokemon({
                    ...newPokemon,
                    base: { ...newPokemon.base, [KEY]: VAL },
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // * simulazione pokemon store
        let { name, type, base } = newPokemon;
        if (name && type && base) {
            name = capitalizeStr(name);
            type = type.map((el) => capitalizeStr(el));
            Object.keys(base).forEach(
                (key) => (base[key] = parseInt(base[key]))
            );
            const newPokemon = {
                id: crypto.randomUUID(),
                name: { english: name },
                type: type.length ? type : ["Normal"],
                base,
            };
            setPokedex([newPokemon, ...pokedex]);
            navigate("/pokedex");
        }
        // axios
        //     .post(apiURL, newPokemon)
        //     .then((res) => {
        //         console.log("Nuovo pokemon aggiunto");
        //         setPokedex(res.data);
        //         navigate("/pokedex")
        //     })
        //     .catch((err) => console.error(err.response.data));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
                <label htmlFor="name" className="text-lg uppercase">
                    Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-1 rounded-md"
                    value={newPokemon.name}
                    onChange={handleInputChange}
                    required={true}
                    autoFocus={true}
                />
            </div>
            <label className="text-lg uppercase">Type:</label>
            <div className="grid grid-cols-3 gap-y-2 gap-x-8">
                {type.map((type, index) => (
                    <TypeInput
                        key={index}
                        type={type}
                        onChange={handleInputChange}
                    />
                ))}
            </div>
            <label className="text-lg uppercase">Base:</label>
            <div className="flex flex-wrap gap-6">
                {base.map((base, index) => (
                    <BaseInput
                        key={index}
                        el={base}
                        onChange={handleInputChange}
                    />
                ))}
            </div>
            <SubmitBtn>Generate Pokemon</SubmitBtn>
        </Form>
    );
}

function Form({ children, onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}
            className="absolute top-14 z-10 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 flex flex-col gap-3 p-4 text-white rounded-md bg-blue-900 [&_input]:text-black max-w-[90vw]"
        >
            {children}
        </form>
    );
}

function TypeInput({ type, onChange }) {
    return (
        <div className="flex gap-1">
            <input
                className="cursor-pointer"
                type="checkbox"
                id={type}
                name="type"
                value={type}
                onChange={onChange}
            />
            <label htmlFor={type} className="capitalize cursor-pointer">
                {type}
            </label>
        </div>
    );
}

function BaseInput({ el: base, onChange }) {
    return (
        <div className="flex items-center gap-2">
            <label htmlFor={base}>{base}:</label>
            <input
                type="number"
                id={base}
                name={base}
                min={1}
                max={250}
                className="p-1 rounded-md w-[50px]"
                onChange={onChange}
                required={true}
            />
        </div>
    );
}

function SubmitBtn({ children }) {
    return (
        <button
            type="submit"
            className="px-8 py-3 mx-auto mt-4 rounded-2xl bg-slate-800 w-fit hover:bg-slate-950"
        >
            {children}
        </button>
    );
}

function capitalizeStr(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export default PokemonCreate;
