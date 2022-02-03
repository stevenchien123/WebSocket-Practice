import { resolve } from 'path';

export const entry = "./index.js";
export const output = {
    filename: "bundle.js",
    path: resolve(__dirname, 'dist')
};