import datas from "../assets/data/program-tv.json";

const Section = () => {
  return (
    <ul>
      {datas.map((data, index) => {
        return (
          <li key={index} className="section">
            <p className="time">{data.time}</p>
            <img src={data.image} alt={data.title} />
            <div className="col">
              <p>{data.title}</p>
              <p>{data.type}</p>
              <div>
                {data.duration}
                <span>{data.direct && "• Direct"}</span>
                <span>{data.isUnseen && "• Inédit"}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Section;
