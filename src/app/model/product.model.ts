import { Category } from "./category.model";

export interface Product{
    id:number;
    name:string;
    quentity:number;
    category:Category;
}