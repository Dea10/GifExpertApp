export type Image = {
    id: string;
    title: string;
    url: string;
}

export type GifResponse = {
    data: Image[];
    loading: boolean;
};
