import { INavigation } from "../interfaces/navigation";

const navigation: INavigation[] = [
  {
    environment: { id: "aws", name: "AWS" },
    dashboards: [
      {
        id: "aws1",
        name: "AWS One",
      },
      {
        id: "aws2",
        name: "AWS Two",
      },
    ],
  },
  {
    environment: { id: "azure", name: "Azure" },
    dashboards: [
      {
        id: "azure1",
        name: "Azure One",
      },
      {
        id: "azure2",
        name: "Azure Two",
      },
      {
        id: "azure3",
        name: "Azure Three",
      },
    ],
  },
];

export async function getNavigation(): Promise<INavigation[]> {
  return new Promise((res) => {
    setTimeout(() => {
      res(navigation);
    }, 500);
  });
}
