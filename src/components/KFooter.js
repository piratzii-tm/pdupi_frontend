const KFooter = () => {
  return (
    <footer>
      <div className={"flex h-5 bg-barberry"}></div>
      <div className={"flex flex-col bg-cod_gray p-16 gap-3 items-center"}>
        <text className={"font-mohave text-base text-barberry"}>
          Address: 775 Rolling Green Rd
        </text>
        <text className={"font-mohave text-base text-barberry"}>
          E-mail: gymfit@gymfit.ro
        </text>
        <text className={"font-mohave text-base text-barberry"}>
          Phone: +40726362739
        </text>
        <text className={"font-mohave text-base text-barberry"}>
          Working hours: 08:00 - 00:00
        </text>
      </div>
    </footer>
  );
};

export default KFooter;
