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