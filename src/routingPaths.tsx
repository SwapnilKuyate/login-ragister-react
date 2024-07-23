import { Route, Routes } from "react-router-dom";
import Login from './components/login'
import Ragister from './components/ragister'

const RoutingPaths =()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/ragister" element={<Ragister/>}/>
            </Routes>
        </>
    )
}
export default RoutingPaths