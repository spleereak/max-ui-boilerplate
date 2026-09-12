"use client";

import { useState } from "react";

import type { CatalogGroup, CatalogStory } from "../model/types";

type InspectorTab = "overview" | "props" | "code";

export function ComponentsInspector({
  group,
  story,
}: {
  group: CatalogGroup;
  story: CatalogStory;
}) {
  const [tab, setTab] = useState<InspectorTab>("overview");
  const props = story.props ?? group.props;

  return (
    <aside className="catalog-inspector hide-scrollbar">
      <div className="catalog-inspector__tabs" role="tablist">
        {(
          [
            ["overview", "Overview"],
            ["props", "Props"],
            ["code", "Code"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={
              tab === id
                ? "catalog-inspector__tab catalog-inspector__tab--active"
                : "catalog-inspector__tab"
            }
          >
            {label}
          </button>
        ))}
      </div>

      <div className="catalog-inspector__body">
        {tab === "overview" && (
          <div className="catalog-inspector__section">
            <h3 className="catalog-inspector__title">{group.component}</h3>
            <p className="catalog-inspector__text">{group.description}</p>
            {story.description && (
              <p className="catalog-inspector__text">{story.description}</p>
            )}
            {story.usage && (
              <div className="catalog-inspector__note">
                <span className="catalog-inspector__note-label">Usage</span>
                <p>{story.usage}</p>
              </div>
            )}
            {story.tags && story.tags.length > 0 && (
              <div className="catalog-inspector__tags">
                {story.tags.map(tag => (
                  <span key={tag} className="catalog-inspector__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <dl className="catalog-inspector__meta">
              <div>
                <dt>Package</dt>
                <dd>@maxhub/max-ui@0.4.0</dd>
              </div>
              <div>
                <dt>Story</dt>
                <dd>{story.name}</dd>
              </div>
              <div>
                <dt>Group</dt>
                <dd>{group.title}</dd>
              </div>
            </dl>
          </div>
        )}

        {tab === "props" && (
          <div className="catalog-inspector__section">
            <p className="catalog-inspector__import">{group.importPath}</p>
            {props.length === 0 ? (
              <p className="catalog-inspector__empty">Нет документированных props.</p>
            ) : (
              <table className="catalog-props">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map(prop => (
                    <tr key={prop.name}>
                      <td>
                        <code>{prop.name}</code>
                        {prop.required && (
                          <span className="catalog-props__required">*</span>
                        )}
                      </td>
                      <td>
                        <code>{prop.type}</code>
                      </td>
                      <td>{prop.defaultValue ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <ul className="catalog-props__descriptions">
              {props
                .filter(prop => prop.description)
                .map(prop => (
                  <li key={prop.name}>
                    <code>{prop.name}</code> — {prop.description}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {tab === "code" && (
          <div className="catalog-inspector__section">
            {story.source ? (
              <pre className="catalog-inspector__code">
                <code>{story.source}</code>
              </pre>
            ) : (
              <p className="catalog-inspector__empty">
                Пример кода для этой story пока не добавлен.
              </p>
            )}
            <p className="catalog-inspector__hint">
              Полный dev-каталог с controls и a11y:{" "}
              <code>npm run storybook</code>
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
