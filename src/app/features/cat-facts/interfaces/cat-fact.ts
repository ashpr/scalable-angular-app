import { CatFactUser } from './cat-fact-user';

export interface CatFact {
    _id: string;
    text: string;
    type: string;
    user: CatFactUser;
    upvotes: number;
    userUpvoted?: any;
}