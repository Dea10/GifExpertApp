export const getGifs = async ( category: string ) => {

    const base_url = 'https://api.giphy.com/v1/gifs/';
    const api_key = 'O6tOWI6t6hQJz77nxKg99KKgVwanoN3t';
    const limit = 5;

    const url = `${ base_url }search?q=${ encodeURI(category) }&limit=${ limit }&api_key=${ api_key }`;
    const response = await fetch(url);
    const { data } = await response.json();

    // map gifs
    const gifs = data.map((img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}