import { NavLink,Link,Outlet,useSearchParams } from 'react-router-dom'
export default function Header(){
    const [searchParams,setSearchParams]=useSearchParams();
    const filteredYear = searchParams.get("year");
    const handlchange = (event)=>{
        const value=event.target.value;
        if(value===""){
            searchParams.delete("year");
            setSearchParams(searchParams);
        }
        else{
            setSearchParams({year:value});
        }
    }
    return(
        <div className="lay-out">
            <header>
                <div className="head">
                    <h1 id="heading-container">SAIM</h1>
                        <div className="head1">
                            <div className="year-filter">
                                <label>Select Year</label>
                                <select value={filteredYear} onChange={handlchange}>
                                    <option value="">All</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                            <NavLink to="/" className={({isActive})=> isActive ? 
                                "home-page" : "to-home-page"}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={({isActive})=>
                                isActive ? "about-page" : "to-about-page"
                            }>
                                About
                            </NavLink>
                        </div>
                </div>
            </header>
            <div className="page-content">
                <Outlet/>
            </div>
        </div>
    );
}