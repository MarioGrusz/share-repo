const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    console.log('cookie was deleted')
}


export default deleteCookie