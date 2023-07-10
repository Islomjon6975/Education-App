import React, { useState } from 'react';
import { Button, Heading, Input, Tag, Text, TextArea } from '../components';

const Index = () => {
  const [isClicked, setIsClicked] = useState(false);
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
    </div>
  );
};

export default Index;
