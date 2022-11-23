import style from "./Card.module.css";
import { CardInterface } from "./types";
import { IconCart } from "./assets/IconCart";

export const Card = ({
  Image,
  Category,
  Title,
  Body,
  Price,
  OriginalPrice,
  buttonText,
}: CardInterface) => {
  return (
    <div className={style.CardContainer}>
      <img className={style.Image} src={Image} alt="Preview image" />
      <div className={style.Card}>
        <h4 className={style.category}>{Category ? Category : "Category"}</h4>
        <h1 className={style.Title}>{Title ? Title : "Title"}</h1>
        <p className={style.Body}>{Body ? Body : "Body"}</p>
        <div className={style.PriceContainer}>
          <h2 className={style.Price}>${Price ? Price : "Price"}</h2>
          <h3 className={style.OriginalPrice}>
            ${OriginalPrice ? OriginalPrice : "OriginalPrice"}
          </h3>
        </div>
        <button className={style.Button}>
          <span>
            <IconCart />
          </span>
          <span className={style.buttonText}>
            {buttonText ? buttonText : "buttonText"}
          </span>
        </button>
      </div>
    </div>
  );
};
