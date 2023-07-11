import React, { useState } from 'react';
import {
  Button,
  Card,
  Heading,
  Input,
  Tag,
  Text,
  TextArea,
} from '../components';
import Rating from '../components/rating/rating';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/layout';

const Index = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Heading tag="h1">Heading</Heading>
      <Heading tag="h2">Heading</Heading>
      <Heading tag="h3">Heading</Heading>
      <hr />
      <Text size="s">Text</Text>
      <Text size="m">Text</Text>
      <Text size="l">Text</Text>
      <hr />
      <Tag size="s">Tag</Tag>
      <Tag size="m">Tag</Tag>
      <Tag size="m" color="green">
        Tag
      </Tag>
      <Tag size="m" color="primary">
        Tag
      </Tag>
      <Tag size="m" color="red">
        Tag
      </Tag>
      <hr />
      <Button appearance="primary">Button</Button>
      <Button appearance="ghost">Button</Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <Button
        appearance="primary"
        arrow={isClicked ? 'down' : 'right'}
        onClick={() => setIsClicked((prev) => !prev)}
      >
        Button
      </Button>
      <hr />
      <Input className="gray" placeholder="Enter" />
      <hr />
      <TextArea placeholder="Message" />
      <hr />
      <Card color="white">Card</Card>
      <Card color="primary">Card</Card>
      <hr />
      <Rating rating={rating} setRating={setRating} isEditable={true} />
      <Rating rating={1} />
    </>
  );
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.post('http://localhost:8100/page-find', {
    firstCategory: 0,
  });

  return {
    props: {
      data,
    },
  };
};
