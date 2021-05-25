import { getGifs } from "../../helpers/getGifs";


describe('getGifs fetching test', () => {
    const category = 'psg';

    test('should bring 5 elements', async () => {
        const gifs = await getGifs(category);
        expect(gifs.length).toBe(5);
    })
});