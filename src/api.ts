import fetch from "cross-fetch";

export async function request(url:string, type:string, data:any) {
    if (type === "POST") {
      const response = await fetch("/api" + url, {
        method: type,
        body: data,
        headers: {
          "content-type": "application/json",
        },
      });
      return await response.json();
    } else {
      const response = await fetch("/api" + url, { method: type, body: data });
      return await response.json();
    }
  }

  /**
   * 登陆
   */
export function login(data:{username:string;password:string}){
    const final = JSON.stringify(data);
    return request("/login", "POST", final);
} 