import * as React from 'react';
import './style.scss';
import classNames from 'classnames';
import { IStory } from '..';

interface IStoryBody {
  data: IStory;
}

const Story = ({ data }: IStoryBody) => {
  const [isExpand, toggleExpand] = React.useState(false);
  const storiesClasses = classNames('story-item', {
    expand: isExpand
  });
  return (
    <div onClick={() => toggleExpand(!isExpand)} className={storiesClasses}>
      <div className="logo">
        <div className="logo-arrow" />
        Score
      </div>
      <div className="story-body">
        <h3 className="one-line title">{data.title}</h3>
        <h5 className="one-line by">By {data.by}</h5>
        <p className="one-line title">{data.title}</p>
      </div>
    </div>
  );
};

export default Story;
