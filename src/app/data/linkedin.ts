export const linkedInWidget: {
  scriptSrc: string;
  widgetClassName: string;
} = {
  scriptSrc: "https://elfsightcdn.com/platform.js",
  widgetClassName: "elfsight-app-e8a1794f-7efd-4292-a935-26f9b24b8239",
};

export const socialWidgets = [
  {
    id: "linkedin",
    label: "LinkedIn",
    widgetClassName: linkedInWidget.widgetClassName,
  },
  {
    id: "facebook",
    label: "Facebook",
    widgetClassName: "elfsight-app-51154c3e-06dd-4e53-b477-c5976ba6f29a",
  },
  {
    id: "instagram",
    label: "Instagram",
    widgetClassName: "elfsight-app-43a77655-d1e4-4417-87d2-278aac965149",
  },
] as const;

export const academyUrl = "https://academy.daintymindz.com";
