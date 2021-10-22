import { PricePerDateDto } from "./PricePerDateDto.model";

export interface ShopProductDto{
    id: number,
    name: string,
    link: string,
    history: Array<PricePerDateDto>,
    provider: string | null
}