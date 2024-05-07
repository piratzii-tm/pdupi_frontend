import KButton from './KButton';

const KCancelAttendance = ({ setIsOpen }) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-white rounded-[2.3rem] p-16 ">
      <div className="flex flex-col space-y-9 items-center">
        <text className="text-[4rem] font-medium font-mohave text-mineshaft text-center">
          Cancel your attendance?
        </text>

        <div className="flex space-x-9">
          <KButton
            title="Yes"
            onClick={() => {
              console.log('Yes');
            }}
          />
          <KButton title="No" transparent onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
};
export default KCancelAttendance;
