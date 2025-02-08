// import {React} from "react"
const NewsItem = ({title,description,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
  <img src="https://images.pexels.com/photos/27351166/pexels-photo-27351166/free-photo-of-a-woman-posing-by-the-industrial-construction.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
