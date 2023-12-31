import { Certificates } from "@/app/components/Certificates";
import { Spacer } from "@/app/components/Spacer";
import { YouTubePlayer } from "@/app/components/YouTubePlayer";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { SubmitSection } from "@/app/components/sections/SubmitSection";

export const metadata = {
  title: "Обо мне",
  description:
    "Консультант-врач-психотерапевт высшей категории, кандидат наук с 20-летним опытом работы с пограничными состояниями психики – неврозами, депрессиями, психосоматическими расстройствами зависимостями (алкогольной и игровой)",
};
export default function AboutPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeroSection isFront={false} />
      <div>
        <YouTubePlayer id="mFPC_lCcH78" />
      </div>
      <div className="prose mx-auto mt-12 max-w-4xl  break-words  dark:prose-dark">
        <p>
          Консультант-врач-психотерапевт высшей категории, кандидат наук с
          20-летним опытом работы с пограничными состояниями психики –
          неврозами, депрессиями, психосоматическими расстройствами,
          зависимостями (алкогольной и игровой).
        </p>
        <p>
          Образование - интернатура по психиатрии, клиническая ординатура по
          психотерапии, кандидат наук. Специализация - аналитическая ,
          когнитивно-поведенческая, системная семейная терапия.
        </p>
        <p>
          Работа в отделениях пограничных состояний, медицинских
          специализированных центрах, государственной реабилитационной
          программе.
        </p>
        <ul></ul>
        <h4 className="mb-4">Работаю в направлениях:</h4>
        <ul>
          <li>Когнитивно-поведенческая терапия;</li>
          <li>Психоаналитическая терапия, юнгианский анализ;</li>
          <li>Системная семейная терапия;</li>
        </ul>
        <p>
          Помогаю при трудностях в отношениях, в том числе в семье с конфликтным
          поведением, при переживании чувства одиночества, неуверенности в себе,
          утрате смысла жизни, личностных и экзистенциальных кризисах с
          необходимостью в самопознании, постановке целей и выявлении ресурсов,
          повышении психологической устойчивости, адаптации в окружающем мире и
          достижении контакта с самим собой.
        </p>
        <h4 className="mb-4">Этапы профессиональной деятельности:</h4>
        <table>
          {/* <thead></thead> */}
          <tbody>
            <tr>
              <td>
                <span className="min-w-24 whitespace-nowrap">1987-1993</span>
              </td>
              <td>
                Обучение в Белорусском Государственном Медицинском Университете
              </td>
            </tr>
            <tr>
              <td>
                <span>1993-1994</span>
              </td>
              <td>Специализация в области психиатрии (интернатура)</td>
            </tr>
            <tr>
              <td>
                <span>1993-1999</span>
              </td>
              <td>
                Работа врачом-психиатром Минского городского
                психоневрологического диспансера
              </td>
            </tr>
            <tr>
              <td>
                <span>1996-1999</span>
              </td>
              <td>
                Аспирантура Института философии Национальной Академии наук
                Беларуси с защитой диссертации по теме
                «Философско-методологические проблемы нормы и психопатологии»
              </td>
            </tr>
            <tr>
              <td>
                <span>1999-2001</span>
              </td>
              <td>
                Клиническая ординатура по психотерапии Белорусской Академии
                последипломного образования, работа в отделении неврозов и
                пограничных состояний РНПЦ «Психическое здоровье»
              </td>
            </tr>
            <tr>
              <td>
                <span>2001-2009</span>
              </td>
              <td>
                Специализация в области зависимостей на базе МООО «ТЭС-терапия»
                Психотерапевтическая работа с пациентами с пограничными
                состояниями психики, зависимостями в комплексе с использованием
                физиотерапевтической аппаратуры
              </td>
            </tr>
            <tr>
              <td>
                <span>2010-2016</span>
              </td>
              <td>Работа врачом-психотерапевтом УЗ «1-я ГКБ»</td>
            </tr>
            <tr>
              <td>
                <span>2016-...</span>
              </td>
              <td>
                Работа в реабилитационном отделении с пациентами зависимого
                профиля и пограничными состояниями
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Certificates />
      <Spacer size="sm" />

      <SubmitSection />
    </div>
  );
}
