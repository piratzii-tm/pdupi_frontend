export const KHeader = ({ children }) => {
  return (
    <div className={"w-full h-1/5 bg-triangleShaped bg-cover"}>
      {children}
      <div className={"flex h-10"}></div>
      <div className={"flex h-5 bg-barberry"}></div>
    </div>
  );
};
