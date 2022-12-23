export const RenderList = ({ films }) => {
  const listItem = films.map(({ id, title }) => <li key={id}>{title}</li>);
  return <ul>{listItem}</ul>;
};
