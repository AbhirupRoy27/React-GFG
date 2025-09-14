function CardWithChildren({children, namedClass}) {

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  height: '40%',
  fontSize: 20,
  color: "red",
  backgroundColor: 'indigo',
  opacity: 0.6,
  borderRadius: '20px',
};

  return (
    <div className={namedClass} style={cardStyle}>
      {children}
    </div>
  );
}

export default CardWithChildren;