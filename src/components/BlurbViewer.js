export default function BlurbViewer(props) {
  const { data } = props;

  return (
    <div className="blurb-card border shadow rounded p-4 mb-3">
      <div className="heading mb-4">
        <h3>{data.title}</h3>
        <small>{data.pubDate}</small>
      </div>

      <div className="body">
        <p>{data.content}</p>
      </div>
    </div>
  );
}
