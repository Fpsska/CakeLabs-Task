import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchSelectMenuStatus } from "../../app/mainSlice";
import SelectMenu from "../SelectMenu/SelectMenu";
import DistrictInfo from "../DistrictInfo/DistrictInfo";
import "./card.scss"

const CardList = ({ sortedItems }) => {
    const { filteredQuartalData, isDataFiltered, selectTemplate, isSelectMenuEmpty } = useSelector(state => state.mainSlice)
    const dispatch = useDispatch()
    // 
    useEffect(() => {
        if (selectTemplate.length === 0) {
            dispatch(switchSelectMenuStatus(true))
        } else {
            dispatch(switchSelectMenuStatus(false))
        }
    }, [selectTemplate, isSelectMenuEmpty])

    const list = useMemo(() => sortedItems.map(item => {
        return (
            <article className={item.isActive ? "card active" : "card"} key={item.id}>
                <div className="card__wrapper">
                    <div className="card__preview">
                        <img className="card__image" src={require(`../../assets/images/${item.image}`)} alt="area" />
                        <span className="card__clarification card__clarification--equipment">{item.equipment}</span>
                        <span className="card__clarification card__clarification--suggestions">{item.suggestions}</span>
                        <div className="card__broadcast">
                            <div className="card__icon"></div>
                            <button className="card__button">Live</button>
                        </div>
                    </div>
                    <div className="card__information">
                        <div className="card__location">
                            <DistrictInfo complexName={item.complexName} subwayName={item.subwayName} walkTime={item.walkTime} wayMoving={item.wayMoving} isActive={item.isActive} />
                        </div>
                        <>
                            {
                                isSelectMenuEmpty ? <h4 className="card__title">Совпадений не найдено</h4> : <SelectMenu isActive={item.isActive} selectTemplate={selectTemplate} />
                            }
                        </>
                    </div>
                </div>
            </article>
        )
    }), [sortedItems, selectTemplate, filteredQuartalData, isDataFiltered])
    return <>{list}</>
}

export default CardList;