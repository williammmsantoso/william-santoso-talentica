export const arrOfObjToObj = (arr: any[]) => {
    return arr.reduce((obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
}

export const removeInString = (txt: string, replaceTxt: string, newTxt: string) => {
    return txt.replace(replaceTxt, newTxt) || '';
}