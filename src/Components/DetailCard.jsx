function DetailCard(propiedades) {
  const { item } = propiedades;
  const { name, id } = item;
  return (
    <div className="card m-5" style={{ width: "90%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="/images/doctor.jpg"
            className="img-fluid rounded-start"
            alt={id}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Email: {item.email}</p>
            <p className="card-text">Phone: {item.phone}</p>
            <p className="card-text">
              Website:{" "}
              <a href="#" className="link">
                {item.website}
              </a>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">ID: {id}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
