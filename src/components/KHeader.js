export const KHeader = ({ children, spaceBeforeLine = true }) => {
  return (
    <div
      className={
        "w-full h-1/5 bg-triangleShaped bg-center bg-no-repeat bg-cover"
      }
    >
      {children}
      {spaceBeforeLine && <div className={"flex h-10"}></div>}
      <div className={"flex h-4 bg-barberry"}></div>
    </div>
  );
};
