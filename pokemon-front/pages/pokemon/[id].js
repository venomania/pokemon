import Link from 'next/link'

export default function pokemon({ pokemon_nom }) {


    return <>
        <main>
            <Link href={'/'}>
                <button> Back</button>
            </Link>
            <h1>{pokemon_nom.forms[0].name}</h1>
            <ul>
                {pokemon_nom.abilities.map((data, index) => (
                    <li>
                        {pokemon_nom.abilities[index].ability.name}
                    </li>
                ))}
            </ul>

        </main>
    </>
}
export async function getServerSideProps({ params }) {

    const pokemon_nom = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)
        .then(r => r.json())
    return {
        props: { pokemon_nom },
    }
}
