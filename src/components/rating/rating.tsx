import { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { RatingProps } from './rating.prop';
import styles from './rating.module.css';
import StarIcon from './star.svg';

const Rating = forwardRef(
  (
    { rating, isEditable = false, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
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
      <div
        {...props}
        ref={ref}
        className={cn(styles.rating, {
          [styles.error]: error,
        })}
      >
        {ratingArray.map((rating, index) => (
          <span key={index}>{rating} </span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

export default Rating;
