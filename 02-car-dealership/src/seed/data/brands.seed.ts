import { v4 as uuid } from 'uuid';
import { Brand } from "../../brands/entities/brand.entity";

export const BRANDS_SEED: Brand[] = [
    {
        id: uuid(),
        name: 'Volvo',
        created_at: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Toyota',
        created_at: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Honda',
        created_at: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Jeep',
        created_at: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Tesla',
        created_at: new Date().getTime(),
    }
]