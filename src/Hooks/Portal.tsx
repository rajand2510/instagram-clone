import { ReactNode, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  /** ID of the root element to mount the portal into (default: "portal-root") */
  id?: string;
  /** Optional class name applied to the container div inside the portal root */
  className?: string;
}

export default function Portal({
  children,
  id = "portal-root",
  className,
}: PortalProps) {
  // create a dedicated container element for this portal instance
  const container = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    let portalRoot = document.getElementById(id);

    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.id = id;
      document.body.appendChild(portalRoot);
    }

    if (className) container.className = className;
    portalRoot.appendChild(container);

    return () => {
      portalRoot?.removeChild(container);
      if (portalRoot && portalRoot.childNodes.length === 0) {
        portalRoot.parentNode?.removeChild(portalRoot);
      }
    };
  }, [container, id, className]);

  return createPortal(children, container);
}
