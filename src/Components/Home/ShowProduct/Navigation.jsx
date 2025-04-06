import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = ({ title }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Capitalize and format segments (e.g., "user-profile" => "User Profile")
  const formatSegment = (segment) =>
    segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

  return (
    <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 py-2">
      <ol className="flex flex-wrap items-center gap-1 sm:gap-2 text-base sm:text-lg text-gray-700 overflow-x-auto whitespace-nowrap">
        <BreadcrumbItem to="/" ariaLabel="Home">
          <HomeIcon />
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const to = `/${pathSegments.slice(0, index + 1).join("/")}`;

          let label = segment;
          if (segment === "cart") label = "Cart";
          else if (segment === "product") label = `Product / ${title || "Details"}`;
          else label = formatSegment(segment);

          return (
            <React.Fragment key={to}>
              <BreadcrumbSeparator />
              <BreadcrumbItem to={!isLast ? to : null}>
                {label}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

const BreadcrumbItem = ({ to, ariaLabel, children }) => {
  const isCurrent = !to;

  return (
    <li>
      {to ? (
        <NavLink
          to={to}
          className="block text-blue-600 hover:underline"
          aria-label={ariaLabel}
        >
          {children}
        </NavLink>
      ) : (
        <span
          className="block text-gray-800 font-semibold"
          aria-current="page"
        >
          {children}
        </span>
      )}
    </li>
  );
};

const BreadcrumbSeparator = () => {
  return (
    <li className="rtl:rotate-180 text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 sm:w-5 sm:h-5"
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
    className="w-5 h-5 sm:w-6 sm:h-6"
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
