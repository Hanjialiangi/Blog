import { Button, Input, message } from '@src/antdModule';
import { login } from '@src/api';
import { setCookie } from '@src/untils';
import '@styles/login.scss';
import { useState } from 'react';

export default function Login():JSX.Element{

    const [username,setUserName] =useState<string>(''); //账号
    const [password,setPassword] = useState<string>(''); //密码
    const [loading,setLoading] = useState<boolean>(false); //状态中

    const handleSubmit = async(e:any) => {
        setLoading(true);
        e.preventDefault();
        if (username === "" || password === "") {
          message.error("用户名或密码不为空");
          setLoading(false);
          return;
        }
        const res = await login({ username, password });
        if (res.data === "success") {
          message.success("登陆成功");
         setCookie('token',res.token) //设置cookie
          setTimeout(() => {
            window.location.href = "/home";
          }, 2000);
        } else {
          message.error("用户名或者密码错误");
          setLoading(false);
        }
    }
    return <div className="main">
        <div className='box'>
            <div className='box_title'>用户登陆</div>
            <form onSubmit={handleSubmit}>
              <div className="username">
                用户名:&nbsp;&nbsp;&nbsp;
                <Input
                  className="username"
                  style={{ width: "200px" }}
                  name="username"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="password">
                密&nbsp;&nbsp; 码:&nbsp;&nbsp;&nbsp;
                <Input
                  className="password"
                  style={{ width: "200px" }}
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                disabled={loading}
                className="login"
                type="primary"
                htmlType="submit"
              >
                登陆
              </Button>
            </form>
        </div>
    </div>
}