import { useContext, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import Context from "../../context/context";
import ACTION from "../../context/action";

function Login(){
    const [user,setUser] = useState({email:"",password:""});
    const {state,dispatch} = useContext(Context);
    const handleInput = (e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const formSubmit = async (e)=>{
        e.preventDefault();
        try {
            const rs = await api.post(url.USER.LOGIN,user);
            const u = rs.data;
            const token = u.token;
            dispatch({type:ACTION.LOGIN,payload:{token:token,user:u}});
            setTimeout(()=>{
                // setState({...state,loading:false});
                dispatch({type:ACTION.HIDE_LOADING});
            },2000); 
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`; 
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="row">
        <form className="col-xs-6" method="POST" action="#" onSubmit={formSubmit} >
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onChange={handleInput} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input onChange={handleInput} type="password" name="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
    );
}
export default Login;