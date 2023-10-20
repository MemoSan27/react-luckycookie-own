const getRandomFromArr = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export const getRandomImage = ( image = 4 ) => {
    const randomImage = Math.floor(Math.random() * image);
    return randomImage;
}

export default getRandomFromArr
