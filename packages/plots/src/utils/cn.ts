
export type ClassValue =
    | ClassArray
    | ClassDictionary
    | string
    | number
    | null
    | boolean
    | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

function toVal(mix: ClassValue | ClassValue[] | string[] | number) {
    var k,
        y,
        str = "";

    if (typeof mix === "string" || typeof mix === "number") {
        str += mix;
    } else if (typeof mix === "object") {
        if (Array.isArray(mix)) {
            for (k = 0; k < mix.length; k++) {
                if (mix[k]) {
                    if ((y = toVal(mix[k]))) {
                        str && (str += " ");
                        str += y;
                    }
                }
            }
        } else {
            for (k in mix) {
                if (mix?.[k]) {
                    str && (str += " ");
                    str += k;
                }
            }
        }
    }

    return str;
}

export default function cn(...inputs: ClassValue[]): string {
    let i = 0,
        tmp: ClassValue,
        x,
        str = "";
    while (i < inputs.length) {
        if ((tmp = inputs[i++])) {
            if ((x = toVal(tmp))) {
                str && (str += " ");
                str += x;
            }
        }
    }
    
    return str;
}
