import { HeaderSection } from "@/app/components/sections/HeaderSection";

export const metadata = {
  title: "Вопросы и ответы",
  description: "Ответы на часто возникающие вопросы о психотерапии",
};
export default async function TestPage() {
  return (
    <div
      id="page_container"
      className="mx-auto flex min-h-screen max-w-7xl flex-col gap-y-16 px-4 pt-[4rem] md:gap-y-20 md:px-10"
    >
      <HeaderSection
        title="Вопросы и ответы"
        subTitle="Ответы на часто возникающие вопросы о психотерапии"
      />
      <div className="prose mx-auto mt-12 max-w-4xl  break-words  dark:prose-dark">
        <h4 className="mb-4">
          Когда обращаться к психоаналитической терапии ?
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          inventore dolore autem libero numquam. Cupiditate provident, quae eos
          accusamus dolor ea optio quia voluptate distinctio eligendi
          repudiandae officia doloremque nesciunt?
        </p>
        <hr />
        <h4 className="mb-4">Почему именно психоаналитическая терапия?</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          inventore dolore autem libero numquam. Cupiditate provident, quae eos
          accusamus dolor ea optio quia voluptate distinctio eligendi
          repudiandae officia doloremque nesciunt?
        </p>
        <hr />
        <h4 className="mb-4">
          Как организован процесс психоаналитической терапии?
        </h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          inventore dolore autem libero numquam. Cupiditate provident, quae eos
          accusamus dolor ea optio quia voluptate distinctio eligendi
          repudiandae officia doloremque nesciunt?
        </p>
        <hr />
        <h4 className="mb-4">Как «работает» психоаналитическая терапия?</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          inventore dolore autem libero numquam. Cupiditate provident, quae eos
          accusamus dolor ea optio quia voluptate distinctio eligendi
          repudiandae officia doloremque nesciunt?
        </p>
        <hr />
        <h4 className="mb-4">Какие задачи и цели у консультации?</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          inventore dolore autem libero numquam. Cupiditate provident, quae eos
          accusamus dolor ea optio quia voluptate distinctio eligendi
          repudiandae officia doloremque nesciunt?
        </p>
        <hr />
        <h4 className="mb-4">Как помогает аналитическая терапия?</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          inventore dolore autem libero numquam. Cupiditate provident, quae eos
          accusamus dolor ea optio quia voluptate distinctio eligendi
          repudiandae officia doloremque nesciunt?
        </p>
      </div>
    </div>
  );
}
