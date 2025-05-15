export interface iFruits {
    name: string,
    img: string,
    description: string,
    genus: string,
    stars: number,
    reviews: iReview[],
}


export interface iReview {
    name: string, 
    text: string,
}