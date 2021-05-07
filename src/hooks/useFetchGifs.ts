import { useEffect, useState } from "react";
import type { GifResponse } from '../DataTypes';
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category: string) : GifResponse  => {

    const [state, setState] = useState<GifResponse>({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category ).then((imgs) => setState(
            {
                data: imgs,
                loading: false
            }
        ) );
    }, [category])

    return state;
}

export default useFetchGifs;