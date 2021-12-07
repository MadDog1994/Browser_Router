import "./Photo.css";

const DataPhoto = ({url}) => {
     return  <div className="photo-wrapper"> {url.map((item) => <img src={item} alt="#" className="photo-img"/>)} </div>
}

export default DataPhoto;