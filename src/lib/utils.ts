function combineClassNames(...classes:(string | undefined | false | null)[]) {
    return classes.filter(Boolean).join(' ');
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