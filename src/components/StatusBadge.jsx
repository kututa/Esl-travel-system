function StatusBadge({ status }) {
  let color = '';
    if (status === 'Approved') {
        color = 'green';
    } else if (status === 'Pending') {
        color = 'orange';
    } else if (status === 'Rejected') {
        color = 'red';
    }

  return (
    <span className={`badge ${color}`}>
      {status}
      <style>
        border-radius: 5px;
        padding: 5px 10px;
        background-color: {color};
        color: white;
      </style>

    </span>
  );
}
export default StatusBadge;
