import resizePrototype from "util/resizePrototype";

const newResize = new resizePrototype();

const Score = ({ data, amp }) => {
    const { score_team_1, score_team_2, team_1, team_2 } = data;

    return (
        <>
            <div className="score">
                <div className="score-team">
                    <div className={`${amp ? "score-team-amp__img" : "score-team__img"}`}>
                        {!amp && <img src={newResize.resizeWapa(team_1?.flag, 80, 90)} alt={team_1?.name} />}
                        {amp && (
                            <amp-img
                                alt={team_1?.name || "larepublica.pe"}
                                title={team_1?.name || "larepublica.pe"}
                                layout="responsive"
                                src={newResize.resizeWapa(team_1?.flag, 80, 90)}
                                class=""
                                width="80"
                                height="90"
                            >
                                <noscript>
                                    <img src={newResize.resizeWapa(team_1?.flag, 80, 90)} width="80" height="90" className="amp-img" />
                                </noscript>
                            </amp-img>
                        )}
                    </div>

                    <p className="score-team__title">{team_1.name}</p>
                </div>
                <div className="count">
                    <div>{score_team_1}</div>
                    <div className="count__sign"></div>
                    <div>{score_team_2}</div>
                </div>
                <div className="score-team">
                    <div className={`${amp ? "score-team-amp__img" : "score-team__img"}`}>
                        {!amp && <img src={newResize.resizeWapa(team_2?.flag, 90, 90)} alt="" />}
                        {amp && (
                            <amp-img
                                alt={team_2?.name || "larepublica.pe"}
                                title={team_2?.name || "larepublica.pe"}
                                layout="responsive"
                                src={newResize.resizeWapa(team_2?.flag, 80, 90)}
                                className="amp-img"
                                width="80"
                                height="90"
                            >
                                <noscript>
                                    <img className="amp-img" src={newResize.resizeWapa(team_2?.flag, 80, 90)} width="90" height="90" />
                                </noscript>
                            </amp-img>
                        )}
                    </div>
                    <p className="score-team__title">{team_2.name}</p>
                </div>
            </div>
            <style jsx={true}>{` 
             .score { 
                display: flex; 
                justify-content: space-evenly; 
                align-items: center; 
                width:100%; 
                max-width: 480px; 
                margin: 0 auto; 
                margin-bottom:10px; 
            }
			.score-team__img img{ 
				height: 70px; 
				max-width: 60px;
				object-fit: fill; 
				display:block;
                margin-bottom: 5px;
			} 
			.score-team-amp__img { 
				width: 70px; 
			}
			amp-img{
				max-height: 70px;
				object-fit: fill; 
				display: block;
			}
         	.score-team__title{ 
				font-weight: 700; 
				text-align: center; 
				color: #333333; 
				font-size: 12px; 
				Line-height: 14px; 
				font-family: "Roboto", sans-serif; 
			}	 
			.count { 
				display:flex; 
				gap: 8px; 
				align-items: center; 
				color: #fff; 
				font-weight: 900; 
                text-align: center; 
				font-size: 48px; 
				padding: 8px; 
				font-family: "Roboto", sans-serif; 
                background: #333;
                border-radius: 5px;
                height: 71px;
                
			}		 
			.count__sign{ 
				width: 30px; 
				height: 7px; 
				background-color: #fff; 
				border-radius: 3px; 
			} 
			@media (min-width: 768px) { 
                .score {
                    justify-content: space-between;
                }
				.count { 
					font-size: 54px; 
				} 
				.count__sign{ 
					height: 9px; 
				} 
				.score-team{ 
					max-width: 150px; 
					display: flex; 
					flex-direction: column; 
				} 
				.score-team__img img{ 
					height: 100px; 
					max-width: 100%;
					width: 100px;
				} 
				.score-team-amp__img { 
					width: 100px; 
					display: flex; 
					flex-direction: column; 
				}
				amp-img{
					max-height: 90px;
					width: 90px; 
				}
			} 
                
            `}</style>
        </>
    );
};
export { Score };
