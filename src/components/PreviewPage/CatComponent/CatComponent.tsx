import React, { useState } from "react";
import style from "./CatComponent.module.css";
import img_task_ok from "./img/task_compl.png";
import frame2 from "./img/frame2.png";
import frame4 from "./img/frame4.png";
import frame3 from "./img/frame3.png";
import frame6 from "./img/frame6.png";
import free_icon_world_book_day from './img/free_icon_world_book_day.png'
import toDoIco from "./img/to-do-list.png";
import deadline2 from "./img/deadline_2.png";
import notif from "./img/active.png";
import structIco from "./img/directory.png";
import GetStartConponent from "../GetStartComponent/GetStartComponent";

const CatComponent = () => {
  const [catHungry, setCatHungry] = useState(false);
  const [catHeatly, setCatHeatly] = useState(false);

  var catImg: string = "";
  if (catHungry && catHeatly) {
    catImg = frame2;
  } else if (!catHungry && catHeatly) {
    catImg = frame6;
  } else if (catHungry && !catHeatly) {
    catImg = frame3;
  } else {
    catImg = frame4;
  }

  return (
    <div>
      <div className={style.wrapper}>
        <p className="text-center text-[#3182b9] text-[40px] font-bold">
          Забыть можно все, главное запиши это, а потом кто-то напомнит
        </p>
        <p className="text-center  text-[#252525] text-[30px] font-semibold mx-[20px] mt-[50px]">
          Добро пожаловать на платформу ToDo которая поможет вам грамотно
          спланировать свое время и незабыть о чем то важном.
        </p>
      </div>
      <div className={style.wrapper}>
        <div className={style.item}>
          <p className="text-[#252525] text-[25px] font-semibold">
            Больше не нужны бумажные ежеденевники, которые можно где то забыть
            или потерять.
            <span>
              <br />
              <br />
              Все ваши задачи всегда у вас под рукой
            </span>
          </p>
        </div>
        <div className={style.item}>
          <img src={free_icon_world_book_day} alt="" />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.item}>
          <img src={catImg} alt="awd" />
        </div>
        <div className={style.item}>
          <div className="h-[80%] w-[auto]">
            <p className="text-[40px] font-bold text-[#252525]">Задачи</p>
            <p className="text-[20px] font-bold text-[#252525]">Tag: Кот</p>
            <div className={style.task_select}>
              <div className={style.task_select_item}>
                <div
                  className="h-[35px] w-[35px] mr-auto ml-[10px] border-[2px] border-[#252525] rounded-md"
                  onClick={() => {
                    setCatHungry(!catHungry);
                  }}
                >
                  {catHungry && (
                    <img
                      src={img_task_ok}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  )}
                </div>
                <div className="h-full w-[235px] ml-auto mr-[10px] flex flex-row justify-center items-center">
                  <p className="text-[15px] font-semibold text-[#252525]">
                    Покормить кота
                  </p>
                </div>
              </div>
              <div className={style.task_select_item}>
                <div
                  className="h-[35px] w-[35px] mr-auto ml-[10px] border-[2px] border-[#252525] rounded-md"
                  onClick={() => {
                    setCatHeatly(!catHeatly);
                  }}
                >
                  {catHeatly && (
                    <img
                      src={img_task_ok}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  )}
                </div>
                <div className="h-full w-[235px] ml-auto mr-[10px] flex flex-row justify-center items-center">
                  <p className="text-[15px] font-semibold text-center text-[#252525]">
                    Сводить кота к ветеренару
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.wrapper}>
        <p className="text-center  text-[#252525] text-[30px] font-semibold mx-[20px] mt-[50px]">
          Основной функционал:
        </p>
      </div>
      <div className={style.wrapper}>
        <div className="h-[100px] w-[300px] my-[10px] rounded-md border-[2px] border-[#252525] flex flex-row items-center justify-center">
          <div className="h-[80px] w-[80px] ml-[10px] mr-auto">
            <img src={toDoIco} alt="ico" className="h-full w-full" />
          </div>
          <div className="h-[80px] w-[185px] mr-[10px] ml-auto flex flex-row justify-center items-center">
            <p className="text-center text-[12px] font-semibold">
              Планируйте свой день, создавая как маленькие, так и глобальные
              задачи
            </p>
          </div>
        </div>

        <div className="h-[100px] w-[300px] my-[10px] rounded-md border-[2px] border-[#252525] flex flex-row items-center justify-center">
          <div className="h-[80px] w-[80px] ml-[10px] mr-auto">
            <img src={deadline2} alt="ico" className="h-full w-full" />
          </div>
          <div className="h-[80px] w-[185px] mr-[10px] ml-auto flex flex-row justify-center items-center">
            <p className="text-center text-[12px] font-semibold">
              Следите за дедлайнами
            </p>
          </div>
        </div>

        <div className="h-[100px] w-[300px] my-[10px] rounded-md border-[2px] border-[#252525] flex flex-row items-center justify-center">
          <div className="h-[80px] w-[80px] ml-[10px] mr-auto">
            <img src={notif} alt="ico" className="h-full w-full" />
          </div>
          <div className="h-[80px] w-[185px] mr-[10px] ml-auto flex flex-row justify-center items-center">
            <p className="text-center text-[12px] font-semibold">
              Создавайте события и мы напомним об их наступлении
            </p>
          </div>
        </div>

        <div className="h-[100px] w-[300px] my-[10px] rounded-md border-[2px] border-[#252525] flex flex-row items-center justify-center">
          <div className="h-[80px] w-[80px] ml-[10px] mr-auto">
            <img src={structIco} alt="ico" className="h-full w-full" />
          </div>
          <div className="h-[80px] w-[185px] mr-[10px] ml-auto flex flex-row justify-center items-center">
            <p className="text-center text-[12px] font-semibold">
              Структурируйте свои задачи
            </p>
          </div>
        </div>
      </div>
      <GetStartConponent />
    </div>
  );
};

export default CatComponent;
