import React from "react";
import { Title } from "bloomer/lib/elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./pros-cons.scss";

export default function ProsCons({ prosConsQuery }) {
  return (
    <>
      <div className="pros-cons">
        {prosConsQuery.map((list, listIndex) => (
          <div
            className={`pc-group__col pc-group__col--${listIndex}`}
            key={listIndex}
          >
            <Title tag="h5" isSize={4}>
              {list.title}
            </Title>
            <ul className="pc-group__col--list">
              {list.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <span className="icon">
                    <FontAwesomeIcon
                      icon={listIndex === 0 ? faCheck : faTimes}
                    />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
