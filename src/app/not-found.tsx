import { ButtonLink } from "@/app/components/Buttons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-10">
      <div className="space-y-2 lg:space-y-0">
        <h2>Ошибка 404</h2>
        <p>Такой страницы не существует</p>
      </div>
      <ButtonLink to="/" title="Вернуться на главную" variant="secondary" />
    </div>
  );
}
