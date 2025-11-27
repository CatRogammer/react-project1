function StudentCard({name, group, track}) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "8px 0" }}>
            <h3>{name}</h3>
            <p>Group: {group}</p>
            <p>Track: {track}</p>
        </div>
    )

}
export default StudentCard;