import { PokemonDomain, POKEMON_STATE } from "../../../domain";

const atack = (damage: number, enemy: PokemonDomain): PokemonDomain => {
    const miss = Math.random();

    if (miss < 0.3) {
        return {
            ...enemy,
            state: POKEMON_STATE.MISS
        }
    }

    let life = enemy.life as number - damage;

    life = life < 0 ? 0 : life;

    return {
        ...enemy,
        state: POKEMON_STATE.HIT,
        life: life
    }

}

export { atack }