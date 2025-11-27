function Card({children}){
    return (
        <div style={{
            border: "2px solid #444",
            borderRadius: "6px",
            padding: "12px",
            margin: "10px 0"
        }}>
            {children}
        </div>
    )
}
export default Card;
