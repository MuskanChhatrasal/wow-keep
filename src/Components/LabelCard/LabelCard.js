
import "../NewNote/newNote.css";

export const LabelCard = ({ item }) => {
  const { _id, title, description, tag, priority, selectedBackgroundColor } =
    item;
  return (
    <>
      <div
        className="display-card pd-1"
        style={{ backgroundColor: selectedBackgroundColor, display: 'flex', flexDirection: 'column' }}
        key={_id}
      >
        <div className="container-input-text pdb-1">
          <h5 className="pdb-1">{title}</h5>
          <p className="pdb-1 text-display-card text-base">{description}</p>
        </div>
        <div className="edit-section flex flex-gap-2">
          <div className="tag flex flex-align-center">{tag}</div>
          <div className="priority flex flex-align-center">{priority}</div>
        </div>
      </div>
      <div className="spacer-2"></div>
    </>
  );
};