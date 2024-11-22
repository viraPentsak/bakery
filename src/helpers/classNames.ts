import {twMerge} from "tw-merge";
import clsx from "clsx";
import type {ClassValue} from "clsx";

export default function classNames(...inputs: ClassValue[]):string {
    return twMerge(clsx(...inputs))
}