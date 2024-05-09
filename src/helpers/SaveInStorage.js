export const SaveInStorage = (key, element) => {
    // Get Elements
    let elements = JSON.parse(localStorage.getItem(key));
    if(Array.isArray(elements)){
        elements.push(element)
        localStorage.setItem(key, JSON.stringify(elements));
    }else{
        localStorage.setItem(key, JSON.stringify([element]));
    }
    return element;
}