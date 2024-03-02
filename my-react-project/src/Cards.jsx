// Cards.jsx
function Cards({ title, subject, imageUrl, Url }) {
    return (
      <div className="card">
        <img src={imageUrl} alt={`${title}`} />
        <h3>{title}</h3>
        <p>{subject}</p>
        <a href={Url} className="card-button">View site</a>
      </div>
    );
  }
  
export default Cards;