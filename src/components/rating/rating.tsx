import React, { useEffect, useState } from 'react';
import { RatingProps } from './rating.prop';
import styles from './rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

const Rating = ({
  rating,
  isEditable = false,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    renderRating(rating);
  }, [rating]);

  const renderRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, index: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: index < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeRatingDisplay(index + 1)}
        onMouseLeave={() => changeRatingDisplay(rating)}
        onClick={() => clickRatingHandler(index + 1)}
      >
        <StarIcon />
      </span>
    ));

    setRatingArray(updateArray);
  };

  const changeRatingDisplay = (index: number) => {
    if (!isEditable) {
      return;
    }

    renderRating(index);
  };

  const clickRatingHandler = (index: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(index);
  };

  return (
    <div {...props} className={cn(styles.rating)}>
      {ratingArray.map((rating, index) => (
        <span key={index}>{rating} </span>
      ))}
    </div>
  );
};

export default Rating;
