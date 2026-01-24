import { useParams } from "react-router-dom";
import Data from './data.js'
import { useEffect , useState } from "react";
export default function Movedetails(){
    const params = useParams();
    const [movie , setMovie] = useState(null);
    useEffect(()=>{
        setMovie(Data[Number(params.id)-1]);
    },[params.id])
    return(
        <>
            <div className={ movie ? "detail-container" : "loading-text"}>
                { movie ? (
                    <>
                        <div className="details-container">
                            <img id="image-details" src={movie.image}/>
                            <h1>Title: {movie.title}</h1>
                            <h1>Category: {movie.category}</h1>
                            <h1>Year: {movie.year}</h1>
                            <h1>Rating: {movie.rating}</h1>
                            <h1>Description: {movie.description}</h1>
                        </div>
                    </>
                ) :"Loading...."}
            </div>
        </>
    );
}