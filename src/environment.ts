const StaticVariables = {
  storiesPerRequest:50,
  APIs: {
    top: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    story:(id:number)=>`https://hacker-news.firebaseio.com/v0/item/${id}.json`
  }
};

export default StaticVariables;
