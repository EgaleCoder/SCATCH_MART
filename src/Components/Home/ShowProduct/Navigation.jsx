import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-xl ml-5 m-2 text-gray-700">
        <BreadcrumbItem to="/" ariaLabel="Home">
          <HomeIcon />
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const to = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator />
              <BreadcrumbItem to={!isLast ? to : null}>
                {segment === "cart" ? "Cart" : segment === "product" ? `Product / ${title}` : segment}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

const BreadcrumbItem = ({ to, ariaLabel, children }) => {
  return (
    <li>
      {to ? (
        <NavLink to={to} className="block text-blue-500" aria-label={ariaLabel}>
          {children}
        </NavLink>
      ) : (
        <span className="block text-gray-500">{children}</span>
      )}
    </li>
  );
};

const BreadcrumbSeparator = () => {
  return (
    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>
  );
};

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

export default Breadcrumb;
