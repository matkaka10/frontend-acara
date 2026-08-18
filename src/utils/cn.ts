import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


// fungsi merge dengan syntax jsx
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}