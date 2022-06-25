import "./table-row.styles.css";

function TableRow({ data, ind }) {
  const {
    title,
    base,
    head,
    user,
    created_at,
    labels,
    requested_reviewers,
    html_url,
  } = data;
  return (
    <tr
      className="body-row"
      key={ind}
    >
      <td>
        <a target="_blank" href={html_url}>{title}</a>
      </td>
      <td>{base?.ref}</td>
      <td>{head?.ref}</td>
      <td>{user?.login}</td>
      <td>{new Date(created_at).toDateString()}</td>
      <td>{labels[0]?.description}</td>
      <td>{requested_reviewers?.length}</td>
    </tr>
  );
}

export default TableRow;
