export const KPageTitle = ({ title = "Client", trainer, classes }) => {
  return trainer ? (
    <div className={"flex flex-col px-10 "}>
      <text className={"text-white text-8xl font-koulen"}>Trainers</text>
      <text className={"text-white text-xl font-mohave"}>
        Descoperă cel mai sănătos stil de viață alături de antrenorii personali
        Gym <text className={"text-barberry"}>Fit</text>!<br />
        Fie că ți-ai propus să pierzi în greutate în timp record, să-ți recapeți
        energia sau să ai un tonus mai bun, alături de un antrenor personal ești
        cu un pas mai aproape de a-ți atinge obiectivele de fitness, pentru că
        vă fi lângă tine pe tot parcursul călătoriei tale!
      </text>
    </div>
  ) : classes ? (
    <div className={"flex flex-col px-10"}>
      <text className={"text-white text-8xl font-koulen"}>Classes</text>
      <text className={"flex-row text-white text-xl font-mohave"}>
        Descoperă cel mai sănătos stil de viață alături de antrenorii personali
        Gym <text className={"text-barberry"}>Fit</text>!<br />
        Fie că ți-ai propus să pierzi în greutate în timp record, să-ți recapeți
        energia sau să ai un tonus mai bun, alături de un antrenor personal ești
        cu un pas mai aproape de a-ți atinge obiectivele de fitness, pentru că
        vă fi lângă tine pe tot parcursul călătoriei tale!
      </text>
    </div>
  ) : (
    <text className={"text-white text-8xl font-koulen px-10"}>{title}</text>
  );
};
