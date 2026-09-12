# MAX UI Boilerplate

Стартовый шаблон для мини-приложений и веб-проектов на **Next.js**, **Feature-Sliced Design (FSD)** и дизайн-системе [**MAX UI**](https://dev.max.ru/ui).

## Стек

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@maxhub/max-ui](https://dev.max.ru/ui) — компоненты MAX
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Storybook 10](https://storybook.js.org/) — каталог компонентов MAX UI
- [shadcn/ui](https://ui.shadcn.com/) — конфиг для будущих компонентов (`components.json`)

## Требования

- **Node.js 18+** (рекомендуется LTS)
- npm, yarn, pnpm или bun

## Быстрый старт

```bash
npm install
npm run dev
```

Открой [http://localhost:3000](http://localhost:3000).

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер Next.js |
| `npm run storybook` | Storybook на [http://localhost:6006](http://localhost:6006) |
| `npm run build-storybook` | Статическая сборка Storybook → `storybook-static/` (для Vercel) |
| `npm run serve-storybook` | Локальный просмотр собранного Storybook |
| `npm run build` | Production-сборка Next.js |
| `npm run start` | Запуск собранного приложения |
| `npm run lint` | ESLint |
| `npm run format` | Prettier — форматирование |
| `npm run format:check` | Prettier — проверка без записи |

## Структура проекта

Next.js-маршруты живут в корневой `app/`, бизнес-логика и UI — в `src/` по FSD.

```
app/                          # Next.js App Router (тонкие обёртки)
  layout.tsx                  # Root layout, стили, MaxUIProvider
  (main)/                     # Группа с общим layout (header)
    layout.tsx
    page.tsx                  # → src/pages/home
  components/                 # Каталог компонентов MAX UI
    layout.tsx
    page.tsx                  # → src/pages/components
  pages/
    _document.js              # Заглушка для Pages Router (см. ниже)

src/
  app/styles/globals.css      # Глобальные стили + Tailwind
  stories/max-ui/             # Storybook stories (только dev)
  pages/                      # FSD: страницы (композиция экранов)
    home/
    components/               # Каталог компонентов на проде
  widgets/                    # FSD: виджеты (header, footer, …)
  features/                   # FSD: фичи
  entities/                   # FSD: сущности
  shared/                     # FSD: переиспользуемый код
    providers/MaxUIProvider.tsx
    lib/utils/cn.ts
    ui/PageShell/
    styles/index.css          # Tailwind @theme
  config/

pages/README.md               # Зачем нужна корневая pages/
```

### FSD + Next.js

Маршруты **не** содержат бизнес-логику — только re-export из `src/pages`:

```tsx
// app/(main)/about/page.tsx
export { AboutPage as default } from "@/src/pages/about";
```

```tsx
// src/pages/about/ui/index.tsx
export default function AboutPage() {
  return <div>...</div>;
}
```

```tsx
// src/pages/about/index.ts
export { default as AboutPage } from "./ui";
```

### Папка `pages/` в корне

Next.js трактует `src/pages/` как **Pages Router**, если в корне нет своей `pages/`. Корневая `pages/` (с `_document.js` и README) снимает конфликт с FSD-слоем `src/pages/`. Подробнее — в [pages/README.md](./pages/README.md).

## MAX UI

### Подключение

Уже настроено в `app/layout.tsx`:

```tsx
import "@maxhub/max-ui/dist/styles.css";
import { MaxUIProvider } from "@/src/shared/providers/MaxUIProvider";
```

Провайдер оборачивает приложение в `<MaxUI>` с `platform="ios"` и `colorScheme="light"`. Для системной тёмной темы измените props в `src/shared/providers/MaxUIProvider.tsx`.

### Использование компонентов

```tsx
import { Button, Typography, Panel } from "@maxhub/max-ui";

export default function MyPage() {
  return (
    <Panel mode="secondary">
      <Typography.Title>Заголовок</Typography.Title>
      <Button variant="primary">Действие</Button>
    </Panel>
  );
}
```

Документация и API: [dev.max.ru/ui](https://dev.max.ru/ui).

### Поля ввода на цветном фоне

На `Panel mode="secondary"` используйте контрастные режимы, иначе фон сливается с полем:

| Компонент | Рекомендуемый mode |
|-----------|-------------------|
| `Input` | `contrast` |
| `Textarea` | `primary` |
| `CellInput` | внутри `CellList mode="island" filled` |

## Tailwind CSS

### Шкала отступов

В `src/shared/styles/index.css`:

```css
--spacing: 0.0625rem;
```

При `html { font-size: 16px }` **число в классе = пиксели**:

```tsx
<div className="px-24 py-16 gap-12" />
// padding-x: 24px, padding-y: 16px, gap: 12px
```

Не используйте стандартные tailwind-размеры «из коробки» (`p-6` = 6px, а не 24px).

### Утилита `cn`

```tsx
import { cn } from "@/src/shared/lib/utils/cn";

<div className={cn("base-class", condition && "conditional-class")} />
```

### shadcn/ui

Конфиг в `components.json`. Добавление компонентов:

```bash
npx shadcn@latest add button
```

Компоненты попадут в `src/shared/components/ui/`.

## Каталог компонентов

Маршрут **`/components`** — встроенный каталог MAX UI (sidebar, canvas, inspector с props/code):

- поиск по компонентам;
- переключение фона canvas;
- вкладки Overview / Props / Code.

Добавление story — в `src/pages/components/model/catalog.ts` и `demos.tsx`.

## Storybook (dev)

Для локальной разработки с controls, a11y и addons:

```bash
npm run storybook
```

Откроется [http://localhost:6006](http://localhost:6006). Stories: `src/stories/max-ui/`.

## Добавление страницы

1. Создайте слайс в FSD:

```
src/pages/profile/
  index.ts
  ui/index.tsx
```

2. Добавьте маршрут:

```
app/(main)/profile/page.tsx
```

```tsx
export { ProfilePage as default } from "@/src/pages/profile";
```

3. При необходимости добавьте ссылку в `src/widgets/app-header/ui/index.tsx`.

## Слои FSD

| Слой | Назначение | Пример |
|------|------------|--------|
| `shared` | UI-kit, utils, API, hooks | `cn`, `PageShell`, `MaxUIProvider` |
| `entities` | Бизнес-сущности | `user`, `product` |
| `features` | Пользовательские сценарии | `auth`, `add-to-cart` |
| `widgets` | Комposite-блоки | `app-header` |
| `pages` | Страницы приложения | `home`, `components` |

Импорты только **снизу вверх** (pages → widgets → features → entities → shared).

## Алиасы путей

```json
"@/*": ["./*"]
```

Примеры:

- `@/src/pages/home`
- `@/src/widgets/app-header`
- `@/src/shared/lib/utils/cn`

## Полезные ссылки

- [MAX UI — документация](https://dev.max.ru/ui)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Next.js App Router](https://nextjs.org/docs/app)
