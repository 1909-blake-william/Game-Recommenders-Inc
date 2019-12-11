export class Videogame {
    constructor(
        public id: number,
        public name: string,
        public platformid: 1,
        public genreid: number,
        public genrename: string,
        public likeDislike: string,
    ) {}
}

export interface ApiResponse {
    id: number;
    parent_platforms: [Platform];
    genre: [Genre];
    website: string;
    ratings: [Rating];
    description: string;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface Genre {
    id: number;
    name: string;
}
