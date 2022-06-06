import JsCookie from 'js-cookie';
/**
 * 存cookie
 */
export function setCookie(name:string,value:string):void{
    JsCookie.set(name,value);
}

/**
 * 取值
 */
export function getCookie(name:string):string|undefined{
    return JsCookie.get(name);
}

/**
 * 删除值
 */
export function removeCookie(name:string):void{
    return JsCookie.remove(name);
}