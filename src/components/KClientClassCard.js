import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const KClientClassCard = ({ image, nume = "Nume", prenume = "Prenume" }) => {
  return (
    <div
      className={
        "flex flex-col p-2 justify-between border-4 border-barberry w-fit h-fit rounded-2xl"
      }
    >
      {/*TODO: Implement the 3 bunbu logic*/}
      <button
        className={"self-end text-barberry"}
        onClick={() => {
          console.log("3 bumbi");
        }}
      >
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div className={"flex flex-col justify-between items-center"}>
        <img
          src={image}
          alt={"image"}
          className={"rounded-full mx-4 m-2"}
          height={150}
          width={150}
        />
        <div className={"flex flex-row gap-3 m-6"}>
          <text className={"font-mohave text-2xl text-white"}>{prenume}</text>
          <text className={"font-mohave text-2xl text-barberry"}>{nume}</text>
        </div>
      </div>
    </div>
  );
};

export default KClientClassCard;
