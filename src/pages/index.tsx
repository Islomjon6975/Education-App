import React from 'react';
import { Heading, Tag, Text } from '../components';

const Index = () => {
  return (
    <div>
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
    </div>
  );
};

export default Index;
