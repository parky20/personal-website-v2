import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Project = {
    title: string
    color: string
    img: string
    lang: string[]
    descr: string
    href?: string
}

export const Colors = { 
   primary:  "rgb(38,65,67)",
   accent: "rgb(225, 99, 136)", //pink
  opaque: "rgb(220, 222, 222, 0.2)"
}