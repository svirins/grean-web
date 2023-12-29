import { PTComponents } from "@/app/components/PTComponents";
import { H4 } from "@/app/components/Typography";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { getPageBySlug } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
  const data = await getPageBySlug("about");
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      {/* <HeroSection /> */}
      <div className="prose mx-auto mt-24 max-w-4xl  break-words  dark:prose-dark">
        <PortableText
          value={data.body}
          onMissingComponent={false}
          components={PTComponents}
        />
        {/* <H4>Этапы профессиональной деятельности</H4>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <strong>1987-1993</strong>
              </td>
              <td>
                Обучение в Белорусском Государственном Медицинском Университете
              </td>
            </tr>
            <tr>
              <td>
                <strong>1993-1994</strong>
              </td>
              <td>Специализация в области психиатрии (интернатура)</td>
            </tr>
            <tr>
              <td>
                <strong>1993-1999</strong>
              </td>
              <td>
                Работа врачом-психиатром Минского городского
                психоневрологического диспансера
              </td>
            </tr>
            <tr>
              <td>
                <strong>1996-1999</strong>
              </td>
              <td>
                Аспирантура Института философии Национальной Академии наук
                Беларуси с защитой диссертации по теме
                «Философско-методологические проблемы нормы и психопатологии»
              </td>
            </tr>
            <tr>
              <td>
                <strong>1999-2001</strong>
              </td>
              <td>
                Клиническая ординатура по психотерапии Белорусской Академии
                последипломного образования, работа в отделении неврозов и
                пограничных состояний РНПЦ «Психическое здоровье»
              </td>
            </tr>
            <tr>
              <td>
                <strong>2001-2009</strong>
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
                <strong>2010-2016</strong>
              </td>
              <td>Работа врачом-психотерапевтом УЗ «1-я ГКБ»</td>
            </tr>
            <tr>
              <td>
                <strong>2016-...</strong>
              </td>
              <td>
                Работа в реабилитационном отделении с пациентами зависимого
                профиля и пограничными состояниями
              </td>
            </tr>
          </tbody>
        </table>
        <H4>Дипломы и сертификаты</H4> */}
      </div>
    </div>
  );
}
