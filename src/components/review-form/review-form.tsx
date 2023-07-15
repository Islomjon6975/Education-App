import cn from 'classnames';

import { ReviewFormProps } from './review-form.props';
import styles from './review-form.module.css';
import Input from '../input/input';
import Rating from '../rating/rating';
import { useState } from 'react';
import TextArea from '../text-area/text-area';
import Button from '../button/button';

const ReviewForm = ({
  productid,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className={cn(styles.reviewForm, className)} {...props}>
      <Input placeholder="Name" className={styles.name} />
      <Input placeholder="Title" className={styles.title} />
      <div className={styles.rating}>
        <span>Rating: </span>
        <Rating isEditable rating={rating} setRating={setRating} />
      </div>
      <TextArea
        placeholder="Description"
        className={styles.description}
      ></TextArea>
      <div className={styles.submit}>
        <Button appearance="primary">Submit</Button>
        <span className={styles.info}>
          * Your review will be moderated and reviewed before being published.
        </span>
      </div>
    </div>
  );
};

export default ReviewForm;
