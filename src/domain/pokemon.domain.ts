
enum POKEMON_STATE {
    HIT,
    MISS,
    CAPTURE,
    DEFAULT
}

type PokemonDomain = {
    id?: number,
    life?: number,
    name: string,
    nick_name?: string,
    base_experience: number,
    sprites: {
        back_default: string,
        front_default: string
    }
    abilities: Ability[],
    state?: POKEMON_STATE,
    timeToRecover?: Date
}
type Ability = {
    ability: {
        name: string
    }
}

export { POKEMON_STATE }
export type { PokemonDomain }