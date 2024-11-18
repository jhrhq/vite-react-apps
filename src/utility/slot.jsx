import { cloneElement, isValidElement } from "react";

export function Slot(props) {
  const { name, children, required, fallback } = props;

  // this is a default slot, that is, non-slotted children
  if (!name) {
    return getDefaultSlot(children);
  }

  // otherwise get it
  let Content = getSlot(children, name);
  if (Content) {
    // remove slot property
    return cloneElement(Content, { slot: undefined });
  }

  if (!Content && required) {
    throw new Error(`Slot(${name}) is required`);
  }

  return Content ?? fallback ?? null;
}

function getSlot(children, name) {
  if (children) {
    if (Array.isArray(children)) {
      return children.find((x) => isValidElement(x) && x.props?.slot === name);
    } else if (isValidElement(children) && children.props?.slot === name) {
      return children;
    }
  }
}

function getDefaultSlot(children) {
  if (children) {
    if (isValidElement(children)) {
      return children.props?.slot ? null : children;
    } else if (Array.isArray(children)) {
      return children.map((x) =>
        x && isValidElement(x) && x.props?.slot ? null : x
      );
    }
  }
  return children;
}
