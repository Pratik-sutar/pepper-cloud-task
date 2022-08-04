{activityStepsArray.map((item) =>(
    <div>
    <div className={item.bgColor}>
      <div className={item.arrowEnd}></div>
      <div className={item.arrowHead}></div>
      <div className="circleInArrow">
        <FontAwesomeIcon icon={item.statusIcon} />
      </div>
      <p className="arrowText">{item.stepName}</p>
    </div>
  </div>
 ))}





 const activityStepsArray = [

    {
      id:"01",
      stepName:"Status",
      statusIcon:faCheck,
      bgColor:"arrowDiv bgGreen",
      arrowHead:"arrowStart bgGreen",
      arrowEnd:"arrowEnd"
    },
    {
      id:"02",
      stepName:"New",
      statusIcon:"",
      bgColor:"arrowDiv bgPink bodyBottomBorder",
      arrowHead:"arrowStart bgPink",
      arrowEnd:"arrowEnd"
    },
    {
      id:"03",
      stepName:"Working",
      statusIcon:"",
      bgColor:"arrowDiv bgWhite arrowBodyWhite ",
      arrowHead:"arrowStart bgWhite arrowBordersWhite",
      arrowEnd:"arrowEnd arrowBordersWhite"
    },
    {
      id:"04",
      stepName:"Nurturing",
      statusIcon:"",
      bgColor:"arrowDiv bgWhite arrowBodyWhite",
      arrowHead:"arrowStart bgWhite arrowBordersWhite",
      arrowEnd:"arrowEnd arrowBordersWhite"
    },
    {
      id:"05",
      stepName:"Converted",
      statusIcon:"",
      bgColor:"arrowDiv bgWhite arrowBodyWhite",
      arrowHead:"arrowStart bgWhite arrowBordersWhite",
      arrowEnd:"arrowEnd arrowBordersWhite"
    },
  ]



//   <div>
//             <div className="arrowDiv">
//               <div className="arrowEnd"></div>
//               <div className="arrowStart"></div>
//               <div className="circleInArrow"></div>
//               <p className="arrowText">Working</p>
//             </div>
//           </div>
//           <div>
//             <div className="arrowDiv">
//               <div className="arrowEnd"></div>
//               <div className="arrowStart"></div>
//               <div className="circleInArrow"></div>
//               <p className="arrowText">Nurturing</p>
//             </div>
//           </div>
//           <div>
//             <div className="arrowDiv">
//               <div className="arrowEnd"></div>
//               <div className="arrowStart"></div>
//               <div className="circleInArrow"></div>
//               <p className="arrowText">Converted</p>
//             </div>
//           </div>