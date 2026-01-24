import Data from './data.js';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Homepage(){
    const [searchParams] = useSearchParams();
    const typefilter = Number(searchParams.get("year"));
    const newData = typefilter ? Data.filter(
        (char)=>(char.year === typefilter)) : Data;
    return(<>
        <div className="new-container">
            {newData.map( newdata=>(
                <div className="main-container" key={newdata.id}>
                    <Link to={`/${newdata.id}`}id="box-details">
                        <h1 id="index-num">{newdata.id}</h1>
                        <img id="sample-image"src={newdata.image}/>
                        <h1 id="h1-element">{newdata.title}</h1>
                        <h2 id="h2-element">Category: {newdata.category}</h2>
                        <h3 id="h3-element">Year: {newdata.year}</h3>
                        <h4 id="h4-element">Rating: {newdata.rating}</h4>
                        <p id="para-element">Description: {newdata.description}</p>
                    </Link>
                </div>
            ))}
        </div>
    </>);
}
