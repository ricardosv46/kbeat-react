import React from "react";
import MediumCard from "../MediumCard/MediumCard";
import SmallCard from "../SmallCard/SmallCard";

const MainGrid = ({ data }) => {
  let firstColumn = null;
  let secondColumn = null;
  let thirdColumn = null;
  const dataMain = data?.articles?.data[0];
  const dataSecondary = data?.articles?.data.slice(1, 5);
  const dataThird = data?.articles?.data.slice(5, 8);

  if (data?.articles?.data.length > 0) {
    firstColumn = (
      <>
        <div className="container__one">
          <MediumCard
            typeTitle={2}
            title={dataMain?.title}
            urlNote={dataMain?.slug}
            urlImg={dataMain?.data?.multimedia[0].path}
            altImg={dataMain?.data?.multimedia[0].data?.alt}
            maxHeightImgDesktop="358px"
            maxHeightImgtMobile="227px"
            fontSize="24px"
            lineHeight="24px"
            resizeHeight={400}
            resizeWidth={600}
            sectionName="CINE Y TV"
          />
        </div>
        <div className="container__two">
          <MediumCard
            typeTitle={2}
            title={dataSecondary[0]?.title}
            urlNote={dataSecondary[0]?.slug}
            urlImg={dataSecondary[0]?.data?.multimedia[0].path}
            altImg={dataSecondary[0]?.data?.multimedia[0].data?.alt}
            sectionName="ASIA FAMA"
            lineHeight="18px"
            fontSize="18px"
          />
          <MediumCard
            typeTitle={2}
            title={dataSecondary[1]?.title}
            urlNote={dataSecondary[1]?.slug}
            urlImg={dataSecondary[1]?.data?.multimedia[0].path}
            altImg={dataSecondary[1]?.data?.multimedia[0].data?.alt}
            sectionName="Series bl"
            lineHeight="18px"
            fontSize="18px"
          />
        </div>
      </>
    );

    secondColumn = (
      <>
        <MediumCard
          typeTitle={2}
          title={dataSecondary[2]?.title}
          urlNote={dataSecondary[2]?.slug}
          urlImg={dataSecondary[2]?.data?.multimedia[0].path}
          altImg={dataSecondary[2]?.data?.multimedia[0].data?.alt}
          sectionName="k-beauty"
          lineHeight="18px"
          fontSize="18px"
        />
        <MediumCard
          typeTitle={2}
          title={dataSecondary[3]?.title}
          urlNote={dataSecondary[3]?.slug}
          urlImg={dataSecondary[3]?.data?.multimedia[0].path}
          altImg={dataSecondary[3]?.data?.multimedia[0].data?.alt}
          sectionName="k-pop"
          lineHeight="18px"
          fontSize="18px"
        />
      </>
    );

    thirdColumn = (
      <>
        <SmallCard
          altImg={dataThird[0]?.data?.multimedia[0].data?.alt}
          urlImg={dataThird[0]?.data?.multimedia[0].path}
          urlNote={dataThird[0]?.slug}
          title={dataThird[0]?.title}
          maxWidthImgtMobile="84px"
          maxHeightImgtMobile="60px"
          maxWidthImgDesktop="99px"
          maxHeightImgDesktop="60px"
          fontSize="16px"
          lineHeight="16px"
        />
        <SmallCard
          altImg={dataThird[1]?.data?.multimedia[0].data?.alt}
          urlImg={dataThird[1]?.data?.multimedia[0].path}
          urlNote={dataThird[1]?.slug}
          title={dataThird[1]?.title}
          maxWidthImgtMobile="84px"
          maxHeightImgtMobile="60px"
          maxWidthImgDesktop="99px"
          maxHeightImgDesktop="60px"
        />
      </>
    );
  } else {
    return null;
  }

  return (
    <>
      <div className="container__main">
        <div className="firstColumn__container">{firstColumn}</div>
        <div className="secondColumn__container">{secondColumn}</div>
      </div>
      <div className="thirdColumn__container">{thirdColumn}</div>
      <style>{`
      .container__main {
        display:flex;
        margin-bottom:24px;
        justify-content: space-between;
        flex-direction: column;
        gap:16px;
      }
      .firstColumn__container {
        display: flex;
        flex-direction: column;
        gap:16px;
      }
      .thirdColumn__container {
        display: flex;
        flex-direction: column;
        gap:16px;
        margin-bottom:24px;
      }
      .firstColumn__container .container__two{
        display: flex;
        flex-direction: row;
        gap:16px
      }
      .secondColumn__container {
        display: flex;
        flex-direction: row;
        gap:16px;
      }
      
      @media (min-width: 999px) {
        .container__main {
          flex-direction: row;
        }
        .firstColumn__container {
          flex-direction: row-reverse;
          width:742px;
          justify-content: space-between;
        }
        .firstColumn__container .container__one{
           width:516px;
        }
        .firstColumn__container .container__two{
          flex-direction: column;
          width: calc(100% - 532px);
       }
        .secondColumn__container{
          width: calc(100% - 758px);
        }
        .secondColumn__container {
          flex-direction: column;
        }
        .thirdColumn__container {
          flex-direction: row;
        }
      }

      `}</style>
    </>
  );
};

export default MainGrid;
