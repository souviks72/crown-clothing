import "./directory-item.styles.scss";

const DirectoryItem = ({ category: { id, title, imageUrl, route } }) => {
  return (
    <div className="directory-item">
      <div
        className="directory-item-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-item-info">
        <p className="directory-item-title">{title}</p>
        <p className="shop-now">Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
