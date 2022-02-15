export default function Tasks({ list, removeItem, checkSomeItem }) {
  return (
    <div>
      <ul>
        {list.map((e, i) => (
          <li key={i} style={{ textDecoration: e.status && "line-through" }}>
            {e.text}, {e.status}
            <button onClick={() => removeItem(e.id)}>Delete</button>
            <input
              onClick={(event) => checkSomeItem(e, event)}
              type="checkbox"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
