import * as React from 'react';
import './style.scss';
import LoadingBar from '../../shared/LoadingBar';
import StaticVariables from '../../environment';
import { getStoriesIds, getStoryById } from '../services/stories';
import Story from './Story';
import InfiniteScroll from 'react-infinite-scroll-component';

export interface IStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
export interface IStoriesContainerState {
  loading: boolean;
  storiesList: IStory[];
  storiesIds: number[];
  start: number;
}
class StoriesContainer extends React.Component<{}, IStoriesContainerState> {
  limit = StaticVariables.storiesPerRequest;

  //
  // ─── COMPONENT STATES ────────────────────────────────────────────────────────────
  //

  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      storiesList: [],
      storiesIds: [],
      start: 0
    };
  }
  changeLoading = (loading: boolean) => {
    this.setState({ loading });
  };
  changeStoriesList = (storiesList: IStory[]) => {
    this.setState({ storiesList });
  };
  changeStoriesIds = (storiesIds: number[]) => {
    this.setState({ storiesIds });
  };
  changeStart = (start: number) => {
    this.setState({ start });
  };

  //
  // ─── ERRORHANDLER ───────────────────────────────────────────────────────────────
  //

  ErrorHandler = (err: any) => {
    this.changeLoading(false);
    console.log(err);
  };

  //
  // ─── APPEND STORY PATCH ───────────────────────────────────────────────────────────
  //

  appendStoryPatch = () => {
    const { start, storiesIds, storiesList } = this.state;
    if (start < storiesIds.length) {
      // there are stories not yet loaded
      const newPatch = storiesIds.slice(start, start + this.limit); // next patch ids;
      this.changeStart(start + this.limit); // change start point
      this.changeLoading(true);
      const patchRequest = newPatch.map(id => {
        return getStoryById(id);
      });
      Promise.all(patchRequest)
        .then(newStoriesList => {
          this.changeStoriesList([...storiesList, ...newStoriesList]);
          this.changeLoading(false);
        })
        .catch(this.ErrorHandler);
    }
  };

  loadStoriesIds = () => {
    getStoriesIds()
      .then(data => {
        this.changeStoriesIds(data);
        this.changeLoading(false);
        this.appendStoryPatch();
      })
      .catch(this.ErrorHandler);
  };

  //
  // ─── LIFE CYCLE ────────────────────────────────────────────────────────────────────
  //
  componentDidMount() {
    this.changeLoading(true);
    this.loadStoriesIds();
  }

  //
  // ─── RENDER ─────────────────────────────────────────────────────────────────────
  //

  render() {
    const { loading, storiesList, start, storiesIds } = this.state;

    return (
      <div className="stories-container">
        <InfiniteScroll
          dataLength={storiesList.length}
          next={this.appendStoryPatch}
          hasMore={start < storiesIds.length}
          loader={null}
          className="stories-list"
        >
          {storiesList.map((n, i) => {
            return <Story data={n} key={n.id} />;
          })}
        </InfiniteScroll>
        {loading ? <LoadingBar /> : ''}
      </div>
    );
  }
}

export default StoriesContainer;
