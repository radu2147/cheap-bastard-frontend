import { ShopProductDto } from "./ShopProductDto.model";

export interface ProdusDto{
    id: number,
    name: string,
    img_name: string | null,
    history: Array<ShopProductDto>
    lowestPrice: number
}