import { atom } from "jotai";

export const countAtom = atom(0);
export const nameAtom = atom("Jotai");
export const doubledCountAtom = atom((get) => get(countAtom) * 2); // 파생 상태
